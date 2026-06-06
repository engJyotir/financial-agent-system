import { api } from "./api";

export const runResearch = async (
  documentId: string
) => {
  const response = await api.post(
    "/run-research",
    {
      document_id: documentId,
    }
  );

  return response.data;
};