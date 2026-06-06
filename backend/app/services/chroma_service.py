from langchain_chroma import Chroma

from app.services.embedding_service import EmbeddingService


class ChromaService:

    @staticmethod
    def get_vector_store():

        embeddings = EmbeddingService.get_embeddings()

        return Chroma(
            collection_name="financial_docs",
            embedding_function=embeddings,
            persist_directory="./chroma_db"
        )