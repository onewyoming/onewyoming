from dataclasses import dataclass
from datetime import datetime


@dataclass
class Applicant:
    email: str
    registration_time: datetime
