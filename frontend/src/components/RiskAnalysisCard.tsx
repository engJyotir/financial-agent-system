
import { RiskAnalysis } from "@/src/types/research";

interface Props {
  data: RiskAnalysis;
}

export default function RiskAnalysisCard({
  data,
}: Props) {

  const riskColor =
    data.overall_risk_rating === "LOW"
      ? "text-green-400"
      : data.overall_risk_rating === "HIGH"
      ? "text-red-400"
      : "text-yellow-400";

  return (
    <div
      className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-xl
      p-8
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Risk Analysis
      </h2>

      <div className="mb-8">

        <h3
          className={`
            text-2xl
            font-bold
            ${riskColor}
          `}
        >
          {data.overall_risk_rating}
        </h3>

      </div>

      <Section
        title="Business Risks"
        items={data.business_risks}
      />

      <Section
        title="Financial Risks"
        items={data.financial_risks}
      />

      <Section
        title="Industry Risks"
        items={data.industry_risks}
      />

      <div className="mt-8">

        <h3
          className="
          text-xl
          font-bold
          mb-3
          "
        >
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

      <h3
        className="
        text-xl
        font-bold
        mb-3
        "
      >
        {title}
      </h3>

      <ul className="space-y-2">

        {items.map(
          (item, index) => (
            <li key={index}>
              • {item}
            </li>
          )
        )}

      </ul>

    </div>
  );
}
