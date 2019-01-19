import attr


@attr.s(auto_attribs=True)
class Email(object):
    local_part: str
    domain: str
