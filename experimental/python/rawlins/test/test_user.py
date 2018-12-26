import os
import traceback
import unittest
from datetime import datetime

import psycopg2

from config import set_environment_variables
from model.User import User


class TestUser(unittest.TestCase):

    def test_create_user(self):
        visitor = User(
            id="",
            email="hikingfan@gmail.com",
            password="hunter2",
            registration_time=datetime.now()
        )
        self.assertEqual(visitor.email, "hikingfan@gmail.com")
        try:
            set_environment_variables()
            dbname = os.environ["POSTGRES_DB"]
            user = os.environ["POSTGRES_USER"]
            host = os.environ["POSTGRES_HOST"]
            password = os.environ["POSTGRES_PASSWORD"]
            connection = psycopg2.connect(f"dbname='{dbname}' user='{user}' host='{host}' password='{password}'")
            cursor = connection.cursor()
            cursor.execute("""SELECT datname from pg_database""")
            rows = cursor.fetchall()
            for row in rows:
                print("Database name: ", row[0])
        except Exception:
            traceback.print_exc()


if __name__ == '__main__':
    unittest.main()
