
from app.services.llm_service import (
    LLMService
)

from app.schemas.risk_analysis import (
    RiskAnalysis
)


class RiskAgent:

    @staticmethod
    def analyze(context: str):

        llm = (
            LLMService
            .get_llm()
            .with_structured_output(
                RiskAnalysis
            )
        )

        prompt = f"""
You are a hedge fund risk analyst.

Context:

{context}

Return:

- overall_risk_rating
- business_risks
- financial_risks
- industry_risks
- summary

Rules:

business_risks:
3-6 items

financial_risks:
3-6 items

industry_risks:
3-6 items

overall_risk_rating:
LOW
MODERATE
HIGH

summary:
1 concise paragraph.
"""

        return llm.invoke(prompt)

