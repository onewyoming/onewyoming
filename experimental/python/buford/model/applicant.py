import os
from dataclasses import dataclass
from datetime import datetime

import psycopg2

from config import set_environment_variables


@dataclass
class Applicant:
    email: str
    registration_time: datetime

    @property
    def on_save(self) -> int:
        set_environment_variables()
        database = os.environ["POSTGRES_DB"]
        user = os.environ["POSTGRES_USER"]
        host = os.environ["POSTGRES_HOST"]
        password = os.environ["POSTGRES_PASSWORD"]
        connection = psycopg2.connect(f"dbname='{database}' user='{user}' host='{host}' password='{password}'")
        cursor = connection.cursor()
        try:
            cursor.execute(
                f"insert into applicant (email, registration_time) values ('{self.email}', '{self.registration_time}')")
        except psycopg2.IntegrityError:
            print("this email already exists")
            return 1
        return 0
