from uuid import uuid4

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.services.chroma_service import ChromaService


class IngestionService:

    @staticmethod
    def ingest_pdf(pdf_path: str):

        document_id = str(uuid4())

        loader = PyPDFLoader(pdf_path)

        docs = loader.load()

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )

        chunks = splitter.split_documents(docs)

        for chunk in chunks:
            chunk.metadata["document_id"] = document_id

        vector_store = ChromaService.get_vector_store()

        vector_store.add_documents(chunks)

        return {
            "document_id": document_id,
            "chunks": len(chunks)
        }