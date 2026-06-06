
from langgraph.graph import (
    StateGraph,
    START,
    END
)

from app.schemas.state import ResearchState

from app.services.retriever_service import (
    RetrieverService
)

from app.agents.financial_agent import (
    FinancialAgent
)

from app.agents.risk_agent import (
    RiskAgent
)

from app.agents.bull_agent import (
    BullAgent
)

from app.agents.bear_agent import (
    BearAgent
)

from app.agents.committee_agent import (
    CommitteeAgent
)


def retrieval_node(state):

    docs = RetrieverService.retrieve(
        query="""
        revenue
        profitability
        margins
        cash flow
        risks
        competition
        liabilities
        debt
        growth
        shareholder returns
        """,
        document_id=state["document_id"],
        k=10
    )

    state["context"] = "\n\n".join(
        [
            doc.page_content
            for doc in docs
        ]
    )

    return state


def financial_node(state):

    state["financial_analysis"] = (
        FinancialAgent.analyze(
            state["context"]
        )
    )

    return state


def risk_node(state):

    state["risk_analysis"] = (
        RiskAgent.analyze(
            state["context"]
        )
    )

    return state


def bull_node(state):

    state["bull_case"] = (
        BullAgent.analyze(
            state["context"]
        )
    )

    return state


def bear_node(state):

    state["bear_case"] = (
        BearAgent.analyze(
            state["context"]
        )
    )

    return state


def committee_node(state):

    print("\n====================")
    print("COMMITTEE NODE")
    print("====================")

    decision = CommitteeAgent.decide(
        state["financial_analysis"].model_dump_json(
            indent=2
        ),
        state["risk_analysis"].model_dump_json(
            indent=2
        ),
        state["bull_case"].model_dump_json(
    indent=2
),
state["bear_case"].model_dump_json(
    indent=2
)
    )

    print("\nDECISION TYPE:")
    print(type(decision))

    print("\nDECISION VALUE:")
    print(decision)

    state["final_recommendation"] = decision

    return state


graph = StateGraph(
    ResearchState
)

graph.add_node(
    "retrieval",
    retrieval_node
)

graph.add_node(
    "financial",
    financial_node
)

graph.add_node(
    "risk",
    risk_node
)

graph.add_node(
    "bull",
    bull_node
)

graph.add_node(
    "bear",
    bear_node
)

graph.add_node(
    "committee",
    committee_node
)

graph.add_edge(
    START,
    "retrieval"
)

graph.add_edge(
    "retrieval",
    "financial"
)

graph.add_edge(
    "financial",
    "risk"
)

graph.add_edge(
    "risk",
    "bull"
)

graph.add_edge(
    "bull",
    "bear"
)

graph.add_edge(
    "bear",
    "committee"
)

graph.add_edge(
    "committee",
    END
)

research_graph = graph.compile()

