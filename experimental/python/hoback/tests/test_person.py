import pendulum
import pytest

from model.email_address import EmailAddress
from model.person import Person


@pytest.fixture
def create_person():
    name: str = "Sarah Michelle Gellar"
    date_of_birth: pendulum.DateTime = pendulum.datetime(1977, 4, 14, 8, 8, 0)
    local_part: str = "hikingfan"
    domain: str = "gmail.com"
    primary_email: EmailAddress = EmailAddress(local_part=local_part, domain=domain)
    person = Person(name=name, date_of_birth=date_of_birth, primary_email=primary_email)
    return person


def test_age(create_person):
    assert create_person.age(pendulum.now()).days > 15254


def test_email(create_person):
    assert "hikingfan@gmail.com" == str(create_person.primary_email)
