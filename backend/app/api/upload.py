import os

from fastapi import (
    APIRouter,
    UploadFile,
    File
)

from app.services.ingestion_service import (
    IngestionService
)

router = APIRouter()


@router.post("/upload-pdf")
async def upload_pdf(
    file: UploadFile = File(...)
):

    os.makedirs(
        "uploads",
        exist_ok=True
    )

    file_path = (
        f"uploads/{file.filename}"
    )

    with open(
        file_path,
        "wb"
    ) as f:

        f.write(
            await file.read()
        )

    result = (
        IngestionService.ingest_pdf(
            file_path
        )
    )

    return {
        "message": "PDF uploaded successfully",
        "document_id": result["document_id"],
        "chunks": result["chunks"]
    }