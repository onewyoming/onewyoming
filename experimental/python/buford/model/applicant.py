from dataclasses import dataclass

import psycopg2
import pytz

from config import get_connection


def get_id_from_email(email) -> int:
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(
        """
        select id from applicants where email = %s;
        """,
        (
            [email]
        )
    )
    rows = cursor.fetchall()
    connection.commit()
    connection.close()
    return rows[0][0]


def check_id_exists(input_id) -> int:
    if isinstance(input_id, int):
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            select count(*) from applicants where id = %s;
            """,
            (
                [input_id]
            )
        )
        rows = cursor.fetchall()
        connection.commit()
        connection.close()
        print(rows)
        return rows[0]


@dataclass
class Applicant:
    # TODO: force all email addresses we save to lower case
    email: str
    registration_time: pytz

    def on_save(self) -> int:
        connection = get_connection()
        cursor = connection.cursor()
        try:
            cursor.execute(
                """
                insert into applicants (email, registration_time) values (%s, %s);
                """,
                (self.email, self.registration_time)
            )
            connection.commit()
        except psycopg2.IntegrityError:
            print("this email already exists")
            return 1
        connection.close()
        return 0
