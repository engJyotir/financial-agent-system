import { FinancialAnalysis } from "@/src/types/research";

interface Props {
  data: FinancialAnalysis;
}

export default function FinancialAnalysisCard({
  data,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Financial Analysis
      </h2>

      <Section
        title="Revenue Analysis"
        items={data.revenue_analysis}
      />

      <Section
        title="Profitability"
        items={data.profitability_analysis}
      />

      <Section
        title="Cash Flow"
        items={data.cash_flow_analysis}
      />

      <Section
        title="Key Highlights"
        items={data.key_highlights}
      />

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">
          Summary
        </h3>

        <p className="text-zinc-300">
          {data.summary}
        </p>
      </div>

    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-8">

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            • {item}
          </li>
        ))}
      </ul>

    </div>
  );
}