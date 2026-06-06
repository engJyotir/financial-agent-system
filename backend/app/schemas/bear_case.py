from pydantic import BaseModel


class BearCase(BaseModel):
    risks: list[str]

    weaknesses: list[str]

    downside_scenarios: list[str]

    short_thesis: str
