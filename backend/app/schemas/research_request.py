from pydantic import BaseModel


class ResearchRequest(BaseModel):
    document_id: str