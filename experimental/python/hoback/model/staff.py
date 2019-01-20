import attr
import pendulum

from model.person import Person


@attr.s(auto_attribs=True)
class Staff(Person):
    id: str
    hire_date: pendulum.DateTime
    position: str
