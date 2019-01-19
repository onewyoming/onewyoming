import pytest

from model.email_address import EmailAddress


@pytest.fixture
def create_email_address():
    local_part = "hikingfan"
    domain = "gmail.com"
    return EmailAddress(local_part=local_part, domain=domain)


def test_to_string(create_email_address):
    assert "hikingfan@gmail.com" == create_email_address.__str__()
