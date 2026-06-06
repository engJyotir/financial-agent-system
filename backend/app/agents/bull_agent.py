
from app.services.llm_service import (
    LLMService
)

from app.schemas.bull_case import (
    BullCase
)


class BullAgent:

    @staticmethod
    def analyze(context: str):

        llm = (
            LLMService
            .get_llm()
            .with_structured_output(
                BullCase
            )
        )

        prompt = f"""
You are a bullish equity analyst.

Context:

{context}

Return:

- catalysts
- strengths
- upside_scenarios
- target_thesis

Each list should contain
3-6 concise items.

target_thesis should be
one concise paragraph.
"""

        return llm.invoke(prompt)

