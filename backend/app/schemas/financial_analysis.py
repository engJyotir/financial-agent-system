from pydantic import BaseModel


class FinancialAnalysis(BaseModel):
    revenue_analysis: list[str]

    profitability_analysis: list[str]

    cash_flow_analysis: list[str]

    key_highlights: list[str]

    summary: str