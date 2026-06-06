
from pydantic import BaseModel


class BullCase(BaseModel):
    catalysts: list[str]

    strengths: list[str]

    upside_scenarios: list[str]

    target_thesis: str

