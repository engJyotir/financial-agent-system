from app.services.chroma_service import ChromaService


class RetrieverService:

    @staticmethod
    def retrieve(
        query: str,
        document_id: str,
        k: int = 5
    ):

        vector_store = ChromaService.get_vector_store()

        return vector_store.similarity_search(
            query=query,
            k=k,
            filter={
                "document_id": document_id
            }
        )