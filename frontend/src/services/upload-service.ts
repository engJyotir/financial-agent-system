import { api } from "./api";

export const uploadPdf = async (
  file: File
) => {
  console.log("UPLOAD SERVICE START");

  const formData = new FormData();

  formData.append(
    "file",
    file
  );

  console.log(
    "FILE SENT:",
    file.name
  );

  const response = await api.post(
    "/api/upload-pdf",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  console.log(
    "UPLOAD RESPONSE:",
    response.data
  );

  return response.data;
};