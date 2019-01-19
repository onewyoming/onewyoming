from dataclasses import dataclass

import pytz as pytz


@dataclass
class Person:
    """Class for the generic person"""
    name: str
    date_of_birth: pytz

    def get_age(self, current_time: pytz):
        return (current_time - self.date_of_birth.astimezone(pytz.timezone('UTC'))).total_seconds
