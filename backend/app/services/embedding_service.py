from dotenv import load_dotenv
load_dotenv()

from langchain_openai import OpenAIEmbeddings


class EmbeddingService:

    @staticmethod
    def get_embeddings():

        return OpenAIEmbeddings(
            model="text-embedding-3-small"
        )