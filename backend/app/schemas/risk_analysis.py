
from pydantic import BaseModel


class RiskAnalysis(BaseModel):
    overall_risk_rating: str

    business_risks: list[str]

    financial_risks: list[str]

    industry_risks: list[str]

    summary: str

