
from app.services.llm_service import (
    LLMService
)

from app.schemas.bear_case import (
    BearCase
)


class BearAgent:

    @staticmethod
    def analyze(context: str):

        llm = (
            LLMService
            .get_llm()
            .with_structured_output(
                BearCase
            )
        )

        prompt = f"""
You are a skeptical hedge fund analyst.

Context:

{context}

Return:

- risks
- weaknesses
- downside_scenarios
- short_thesis

Each list should contain
3-6 concise items.

short_thesis should be
one concise paragraph.
"""

        return llm.invoke(prompt)

