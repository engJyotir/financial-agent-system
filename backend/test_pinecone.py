from pinecone import Pinecone
from app.config import (
    PINECONE_API_KEY,
    PINECONE_INDEX_NAME
)

pc = Pinecone(
    api_key=PINECONE_API_KEY
)

index = pc.Index(
    PINECONE_INDEX_NAME
)

print(index.describe_index_stats())