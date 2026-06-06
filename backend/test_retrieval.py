from app.services.retriever_service import RetrieverService

docs = RetrieverService.retrieve(
    "What was revenue growth?"
)

print("\nRESULTS\n")

for i, doc in enumerate(docs, start=1):
    print(f"\n--- DOC {i} ---\n")
    print(doc.page_content[:1000])