from pydantic import BaseModel, Field


class CommitteeDecision(BaseModel):
    recommendation: str

    confidence: int = Field(
        ge=1,
        le=10
    )

    positives: list[str]
    concerns: list[str]

    thesis: str
    reasoning: str