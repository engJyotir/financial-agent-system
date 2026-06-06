from app.graph.research_graph import (
    research_graph
)

result = research_graph.invoke(
    {
        "document_id": "test",
        "context": "",
        "financial_analysis": "",
        "risk_analysis": "",
        "bull_case": "",
        "bear_case": "",
        "final_recommendation": ""
    }
)

print("\n")
print("=" * 80)
print("FINAL COMMITTEE DECISION")
print("=" * 80)
print("\n")

print(
    result["final_recommendation"]
)