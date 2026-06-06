interface Props {
    recommendation: string;
    confidence: number;
  
    positives: string[];
    concerns: string[];
  
    thesis: string;
    reasoning: string;
  }
  
  export default function CommitteeDecision({
    recommendation,
    confidence,
    positives,
    concerns,
    thesis,
    reasoning,
  }: Props) {
  
    const color =
      recommendation === "BUY"
        ? "text-green-400"
        : recommendation === "SELL"
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
        <h2 className="text-4xl font-bold mb-8">
          Investment Committee
        </h2>
  
        <div className="mb-8">
  
          <div
            className={`text-5xl font-bold ${color}`}
          >
            {recommendation}
          </div>
  
          <div className="text-zinc-400 mt-2">
            Confidence: {confidence}/10
          </div>
  
        </div>
  
        <div className="grid md:grid-cols-2 gap-8 mb-8">
  
          <div>
            <h3 className="text-green-400 text-xl font-bold mb-4">
              Positives
            </h3>
  
            <ul className="space-y-2">
              {positives.map(
                (item, index) => (
                  <li key={index}>
                    ✅ {item}
                  </li>
                )
              )}
            </ul>
          </div>
  
          <div>
            <h3 className="text-red-400 text-xl font-bold mb-4">
              Concerns
            </h3>
  
            <ul className="space-y-2">
              {concerns.map(
                (item, index) => (
                  <li key={index}>
                    ⚠️ {item}
                  </li>
                )
              )}
            </ul>
          </div>
  
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">
            Investment Thesis
          </h3>
  
          <p>{thesis}</p>
        </div>
  
        <div>
          <h3 className="text-xl font-bold mb-3">
            Reasoning
          </h3>
  
          <p>{reasoning}</p>
        </div>
      </div>
    );
  }