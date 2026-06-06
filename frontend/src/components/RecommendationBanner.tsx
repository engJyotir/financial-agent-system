interface Props {
    recommendation: string;
  }
  
  export default function RecommendationBanner({
    recommendation,
  }: Props) {
  
    const upper =
      recommendation.toUpperCase();
  
    let emoji = "🟡";
  
    if (upper.includes("BUY"))
      emoji = "🟢";
  
    if (upper.includes("SELL"))
      emoji = "🔴";
  
    return (
      <div
        className="
        bg-zinc-900
        border
        border-zinc-700
        rounded-xl
        p-6
        "
      >
        <div className="text-4xl font-bold">
          {emoji}
        </div>
  
        <h2
          className="
          text-3xl
          font-bold
          mt-2
          "
        >
          Investment Committee Decision
        </h2>
  
        <p
          className="
          text-zinc-300
          mt-3
          "
        >
          {recommendation}
        </p>
      </div>
    );
  }