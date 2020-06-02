import time
from typing import Any, List

import aiohttp
import structlog
from app import crud, models, schemas
from app.api import deps
from app.core.config import settings
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

logger = structlog.get_logger()

router = APIRouter()


@router.get("/", response_model=List[schemas.Machine])
async def read_machines(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Retrieve machines.
    """
    machines = await crud.machine.get_multi_with_check_online(
        db, skip=skip, limit=limit
    )
    return [
        schemas.Machine(
            **schemas.MachineInDB.from_orm(machine).dict(),
            was_recently_online=was_recently_online(machine),
        )
        for machine in machines
    ]


@router.post("/", response_model=schemas.Machine)
def create_machine(
    *,
    db: Session = Depends(deps.get_db),
    machine_in: schemas.MachineCreate,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Create new machine.
    """
    machine = crud.machine.create(db=db, obj_in=machine_in)
    return machine


@router.get("/{id}", response_model=schemas.Machine)
async def read_machine(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get machine by ID.
    """
    machine = await crud.machine.get_with_check_online(db=db, id=id)
    if not machine:
        raise HTTPException(status_code=404, detail="machine not found")

    return schemas.Machine(
        **schemas.MachineInDB.from_orm(machine).dict(),
        was_recently_online=was_recently_online(machine),
    )


def was_recently_online(machine: models.Machine) -> bool:
    if not machine.last_online_timestamp:
        return False

    delta_between_last_online = int(time.time()) - machine.last_online_timestamp
    return delta_between_last_online <= settings.WAS_RECENTLY_ONLINE_TIMEDELTA


@router.put("/{id}", response_model=schemas.Machine)
def update_machine(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    machine_in: schemas.MachineUpdate,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Update an machine.
    """
    machine = crud.machine.get(db=db, id=id)
    if not machine:
        raise HTTPException(status_code=404, detail="machine not found")
    logger.info("updating machine", machine_in=machine_in)
    machine = crud.machine.update(db=db, db_obj=machine, obj_in=machine_in)
    return machine


@router.delete("/{id}", response_model=schemas.Machine)
def delete_machine(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Delete an machine.
    """
    machine = crud.machine.get(db=db, id=id)
    if not machine:
        raise HTTPException(status_code=404, detail="machine not found")
    machine = crud.machine.remove(db=db, id=id)
    return machine


@router.get(
    "/{id}/active-processes",
    response_model=List[schemas.ActiveProcess],
    dependencies=[Depends(deps.get_current_active_user)],
)
def get_machine_active_processes(*, id: int, db: Session = Depends(deps.get_db)):
    """
    Get machine active processes
    """
    machine = crud.machine.get(db=db, id=id)
    if not machine:
        raise HTTPException(status_code=404, detail="machine not found")

    return [schemas.ActiveProcess(hash="nkaflfaknl", name="test")]


@router.get(
    "/{id}/interfaces",
    response_model=List[schemas.Interface],
    dependencies=[Depends(deps.get_current_active_user)],
)
def get_machine_interfaces(*, id: int, db: Session = Depends(deps.get_db)):
    """
    Get machine interfaces
    """
    machine = crud.machine.get(db=db, id=id)
    if not machine:
        raise HTTPException(status_code=404, detail="machine not found")

    return [schemas.Interface(name="test")]


@router.get("/{id}/ping")
async def ping_machine(*, id: int, db: Session = Depends(deps.get_db)):
    machine = crud.machine.get(db=db, id=id)
    if not machine:
        raise HTTPException(status_code=404, detail="machine not found")

    timeout = aiohttp.ClientTimeout(total=5)

    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(f"{machine.host}/ping") as resp:
                resp.raise_for_status()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{e}")
