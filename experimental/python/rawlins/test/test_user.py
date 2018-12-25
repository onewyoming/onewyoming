import unittest
from datetime import datetime

from model.User import User


class TestUser(unittest.TestCase):

    def test_create_user(self):
        visitor = User(
            email="hikingfan@gmail.com",
            password="hunter2",
            registration_time=datetime.now()
        )
        self.assertEqual(visitor.email, "hikingfan@gmail.com")


if __name__ == '__main__':
    unittest.main()
