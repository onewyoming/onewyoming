import uuid

import pendulum
import pytest

from model.email_address import EmailAddress
from model.staff import Staff


@pytest.fixture
def create_staff():
    name: str = "Sarah Michelle Gellar"
    date_of_birth: pendulum.DateTime = pendulum.datetime(1977, 4, 14, 8, 8, 0)
    local_part: str = "hikingfan"
    domain: str = "gmail.com"
    primary_email: EmailAddress = EmailAddress(local_part=local_part, domain=domain)
    person = Staff(name=name, date_of_birth=date_of_birth, primary_email=primary_email, id=uuid.uuid4(),
                   hire_date=pendulum.now('UTC'), position="Director of Infrastructure")
    return person


def test_age(create_staff):
    assert create_staff.age(pendulum.now()).days > 15254


def test_email(create_staff):
    assert "hikingfan@gmail.com" == str(create_staff.primary_email)
