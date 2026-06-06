import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  content: string;
}

export default function AnalysisCard({
  title,
  content,
}: Props) {
  return (
    <div
      className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-xl
      p-6
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        {title}
      </h2>

      <div
        className="
        prose
        prose-invert
        max-w-none
        "
      >
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}