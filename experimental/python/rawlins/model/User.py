from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: str
    email: str
    password: str
    registration_time: datetime
