from app.agents.financial_agent import FinancialAgent

analysis = FinancialAgent.analyze()

print("\n")
print("=" * 80)
print("FINANCIAL ANALYSIS")
print("=" * 80)
print("\n")

print(analysis)