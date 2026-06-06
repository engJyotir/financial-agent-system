from fastapi import APIRouter

from app.graph.research_graph import research_graph

from app.schemas.research_request import ResearchRequest
from app.schemas.research_response import ResearchResponse

router = APIRouter()


@router.post(
    "/run-research",
    response_model=ResearchResponse
)
def run_research(
    request: ResearchRequest
):

    result = research_graph.invoke(
        {
            "document_id": request.document_id,
            "context": "",
            "financial_analysis": None,
            "risk_analysis": "",
            "bull_case": "",
            "bear_case": "",
            "final_recommendation": ""
        }
    )

    print("\n====================")
    print("API RESPONSE CHECK")
    print("====================")

    print(
        "FINAL TYPE:",
        type(result["final_recommendation"])
    )

    print(
        "FINAL VALUE:",
        result["final_recommendation"]
    )

    return {
        "financial_analysis": result["financial_analysis"],
        "risk_analysis": result["risk_analysis"],
        "bull_case": result["bull_case"],
        "bear_case": result["bear_case"],
        "final_recommendation": result["final_recommendation"]
    }