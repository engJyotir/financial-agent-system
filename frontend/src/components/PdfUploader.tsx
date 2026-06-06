
"use client";

import { useRef, useState } from "react";

interface Props {
  file: File | null;
  setFile: (file: File | null) => void;
  onUpload: () => void;
}

export default function PdfUploader({
  file,
  setFile,
  onUpload,
}: Props) {
  const [dragging, setDragging] =
    useState(false);

  const inputRef =
    useRef<HTMLInputElement>(null);

  const handleDrop = (
    e: React.DragEvent
  ) => {
    e.preventDefault();

    setDragging(false);

    const droppedFile =
      e.dataTransfer.files?.[0];

    if (
      droppedFile &&
      droppedFile.type ===
        "application/pdf"
    ) {
      setFile(droppedFile);
    }
  };

  return (
    <div className="mb-8">

      <div
        onClick={() =>
          inputRef.current?.click()
        }
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() =>
          setDragging(false)
        }
        onDrop={handleDrop}
        className={`
          cursor-pointer
          transition-all
          duration-300
          border-2
          border-dashed
          rounded-2xl
          p-12
          text-center

          ${
            dragging
              ? `
              border-green-500
              bg-green-500/10
              shadow-[0_0_40px_rgba(34,197,94,0.3)]
              `
              : `
              border-zinc-700
              bg-zinc-900
              hover:border-blue-500
              hover:bg-zinc-800
              `
          }
        `}
      >

        <div className="text-6xl mb-4">
          📄
        </div>

        <h2
          className="
          text-2xl
          font-bold
          mb-2
          "
        >
          {dragging
            ? "Release to Upload"
            : "Drop Annual Report Here"}
        </h2>

        <p className="text-zinc-400">
          Drag & Drop or Click to Browse
        </p>

        <p
          className="
          text-sm
          text-zinc-500
          mt-3
          "
        >
          PDF files only
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
        />
      </div>

      {file && (
        <div
          className="
          mt-4
          bg-zinc-900
          border
          border-zinc-800
          rounded-xl
          p-4
          flex
          justify-between
          items-center
          "
        >
          <div>
            <div className="font-medium">
              {file.name}
            </div>

            <div
              className="
              text-sm
              text-zinc-500
              "
            >
              {(
                file.size /
                1024 /
                1024
              ).toFixed(2)}
              {" "}MB
            </div>
          </div>

          <button
            onClick={onUpload}
            className="
            bg-blue-600
            hover:bg-blue-700
            px-5
            py-2
            rounded-lg
            font-medium
            "
          >
            Upload Report
          </button>
        </div>
      )}
    </div>
  );
}

