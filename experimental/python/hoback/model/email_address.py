import attr


@attr.s(auto_attribs=True)
class EmailAddress(object):
    local_part: str
    domain: str

    def __str__(self) -> str:
        return f"{self.local_part}@{self.domain}"
