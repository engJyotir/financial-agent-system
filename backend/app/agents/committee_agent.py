from app.services.llm_service import (
    LLMService
)

from app.schemas.committee_decision import (
    CommitteeDecision
)


class CommitteeAgent:

    @staticmethod
    def decide(
        financial_analysis: str,
        risk_analysis: str,
        bull_case: str,
        bear_case: str
    ):

        llm = (
            LLMService
            .get_llm()
            .with_structured_output(
                CommitteeDecision
            )
        )

        prompt = f"""
You are a senior investment committee.

Review:

FINANCIAL ANALYSIS:
{financial_analysis}

RISK ANALYSIS:
{risk_analysis}

BULL CASE:
{bull_case}

BEAR CASE:
{bear_case}

Provide:

- recommendation
- confidence
- positives
- concerns
- thesis
- reasoning

Recommendation must be:

BUY
HOLD
SELL
"""

        return llm.invoke(prompt)