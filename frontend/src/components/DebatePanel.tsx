
import {
  BullCase,
  BearCase,
} from "@/src/types/research";

interface Props {
  bull: BullCase;
  bear: BearCase;
}

export default function DebatePanel({
  bull,
  bear,
}: Props) {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      gap-6
      "
    >
      {/* Bull Case */}

      <div
        className="
        bg-green-950
        border
        border-green-800
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          mb-6
          "
        >
          🐂 Bull Case
        </h2>

        <Section
          title="Catalysts"
          items={bull.catalysts}
        />

        <Section
          title="Strengths"
          items={bull.strengths}
        />

        <Section
          title="Upside Scenarios"
          items={bull.upside_scenarios}
        />

        <div className="mt-6">
          <h3
            className="
            text-lg
            font-bold
            mb-2
            "
          >
            Target Thesis
          </h3>

          <p>
            {bull.target_thesis}
          </p>
        </div>
      </div>

      {/* Bear Case */}

      <div
        className="
        bg-red-950
        border
        border-red-800
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          mb-6
          "
        >
          🐻 Bear Case
        </h2>

        <Section
          title="Risks"
          items={bear.risks}
        />

        <Section
          title="Weaknesses"
          items={bear.weaknesses}
        />

        <Section
          title="Downside Scenarios"
          items={bear.downside_scenarios}
        />

        <div className="mt-6">
          <h3
            className="
            text-lg
            font-bold
            mb-2
            "
          >
            Short Thesis
          </h3>

          <p>
            {bear.short_thesis}
          </p>
        </div>
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
    <div className="mb-6">

      <h3
        className="
        text-lg
        font-bold
        mb-2
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

