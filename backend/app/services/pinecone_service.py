from pinecone import Pinecone

from langchain_openai import (
    OpenAIEmbeddings
)

from langchain_pinecone import (
    PineconeVectorStore
)

from app.config import (
    PINECONE_API_KEY,
    PINECONE_INDEX_NAME
)


class PineconeService:

    @staticmethod
    def get_vector_store():

        pc = Pinecone(
            api_key=PINECONE_API_KEY
        )

        index = pc.Index(
            PINECONE_INDEX_NAME
        )

        embeddings = OpenAIEmbeddings(
            model="text-embedding-3-small"
        )

        return PineconeVectorStore(
            index=index,
            embedding=embeddings
        )