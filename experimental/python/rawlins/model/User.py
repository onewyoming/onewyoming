from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: int
    email: str
    password: str
    registration_time: datetime
