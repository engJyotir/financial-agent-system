from app.services.llm_service import (
    LLMService
)

from app.schemas.financial_analysis import (
    FinancialAnalysis
)


class FinancialAgent:

    @staticmethod
    def analyze(context: str):

        llm = (
            LLMService
            .get_llm()
            .with_structured_output(
                FinancialAnalysis
            )
        )

        prompt = f"""
You are a senior equity research analyst.

Context:

{context}

Return:

- revenue_analysis
- profitability_analysis
- cash_flow_analysis
- key_highlights
- summary

Rules:

Each analysis section should contain
3-6 concise bullet points.

summary should be 1 paragraph.
"""

        return llm.invoke(prompt)