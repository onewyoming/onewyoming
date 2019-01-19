import attr
import pendulum

from model.email_address import EmailAddress


@attr.s(auto_attribs=True)
class Person(object):
    name: str
    date_of_birth: pendulum.DateTime
    primary_email: EmailAddress

    def age(self, current_date: pendulum.DateTime) -> pendulum:
        return current_date - self.date_of_birth
