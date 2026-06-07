from app.services.pinecone_service import (
    PineconeService
)


class RetrieverService:

    @staticmethod
    def retrieve(
        query: str,
        document_id: str,
        k: int = 5
    ):

        vector_store = (
            PineconeService.get_vector_store()
        )

        return (
            vector_store.similarity_search(
                query=query,
                k=k,
                filter={
                    "document_id": {
                        "$eq": document_id
                    }
                }
            )
        )