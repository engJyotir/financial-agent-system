
from pydantic import BaseModel

from app.schemas.financial_analysis import (
    FinancialAnalysis
)

from app.schemas.risk_analysis import (
    RiskAnalysis
)

from app.schemas.bull_case import (
    BullCase
)

from app.schemas.bear_case import (
    BearCase
)

from app.schemas.committee_decision import (
    CommitteeDecision
)


class ResearchResponse(BaseModel):

    financial_analysis: FinancialAnalysis

    risk_analysis: RiskAnalysis

    bull_case: BullCase

    bear_case: BearCase

    final_recommendation: CommitteeDecision

