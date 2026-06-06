
"use client";

import { useState } from "react";

import FinancialAnalysisCard from "@/src/components/FinancialAnalysisCard";
import RiskAnalysisCard from "@/src/components/RiskAnalysisCard";
import DebatePanel from "@/src/components/DebatePanel";
import CommitteeDecision from "@/src/components/CommitteeDecision";
import PdfUploader from "@/src/components/PdfUploader";
import { uploadPdf } from "@/src/services/upload-service";
import { runResearch } from "@/src/services/research-service";

import { ResearchResponse } from "@/src/types/research";

export default function Home() {
  const [file, setFile] =
    useState<File | null>(null);

  const [documentId, setDocumentId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [research, setResearch] =
    useState<ResearchResponse | null>(
      null
    );

  const handleUpload = async () => {
    if (!file) {
      alert("Select PDF first");
      return;
    }

    try {
      const result =
        await uploadPdf(file);

      setDocumentId(
        result.document_id
      );

      alert(
        "PDF uploaded successfully"
      );
    } catch (err) {
      console.error(err);

      alert(
        "Upload failed"
      );
    }
  };

  const handleResearch =
    async () => {
      if (!documentId) {
        alert(
          "Upload PDF first"
        );
        return;
      }

      try {
        setLoading(true);

        const result =
          await runResearch(
            documentId
          );

        console.log(result);

        setResearch(result);
      } catch (err) {
        console.error(err);

        alert(
          "Research failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      p-10
      "
    >
      <div className="max-w-7xl mx-auto">

        <h1
          className="
          text-5xl
          font-bold
          mb-10
          "
        >
          Financial Agent System
        </h1>

        <PdfUploader
          file={file}
          setFile={setFile}
          onUpload={handleUpload}
        />

        <div className="mb-8">
          <button
            onClick={handleResearch}
            className="
    bg-green-600
    hover:bg-green-700
    px-6
    py-3
    rounded-xl
    font-semibold
    "
          >
            Run Research
          </button>
        </div>

        {loading && (
          <div
            className="
            text-xl
            font-semibold
            mb-8
            "
          >
            Running Financial Agents...
          </div>
        )}

        {research && (
          <div className="space-y-6">

            <CommitteeDecision
              recommendation={
                research.final_recommendation
                  .recommendation
              }
              confidence={
                research.final_recommendation
                  .confidence
              }
              positives={
                research.final_recommendation
                  .positives
              }
              concerns={
                research.final_recommendation
                  .concerns
              }
              thesis={
                research.final_recommendation
                  .thesis
              }
              reasoning={
                research.final_recommendation
                  .reasoning
              }
            />

            <FinancialAnalysisCard
              data={
                research.financial_analysis
              }
            />

            <RiskAnalysisCard
              data={
                research.risk_analysis
              }
            />

            <DebatePanel
              bull={
                research.bull_case
              }
              bear={
                research.bear_case
              }
            />

          </div>
        )}

      </div>
    </main>
  );
}
