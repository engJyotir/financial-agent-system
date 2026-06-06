
export interface FinancialAnalysis {
  revenue_analysis: string[];
  profitability_analysis: string[];
  cash_flow_analysis: string[];
  key_highlights: string[];
  summary: string;
}

export interface RiskAnalysis {
  overall_risk_rating: string;
  business_risks: string[];
  financial_risks: string[];
  industry_risks: string[];
  summary: string;
}

export interface BullCase {
  catalysts: string[];
  strengths: string[];
  upside_scenarios: string[];
  target_thesis: string;
}

export interface BearCase {
  risks: string[];
  weaknesses: string[];
  downside_scenarios: string[];
  short_thesis: string;
}

export interface CommitteeDecision {
  recommendation: string;
  confidence: number;

  positives: string[];
  concerns: string[];

  thesis: string;
  reasoning: string;
}

export interface ResearchResponse {
  financial_analysis: FinancialAnalysis;

  risk_analysis: RiskAnalysis;

  bull_case: BullCase;

  bear_case: BearCase;

  final_recommendation: CommitteeDecision;
}