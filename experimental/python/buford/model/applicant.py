from dataclasses import dataclass

import pytz

from config import get_connection


@dataclass
class Applicant:
    email: str
    registration_time: pytz

    def on_save(self) -> int:
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute(
            f"insert into applicants (email, registration_time) values ('{self.email}', '{self.registration_time}');")
        connection.commit()
        connection.close()
        return 0
