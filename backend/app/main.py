import app.config

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.upload import router as upload_router
from app.api.research import router as research_router

app = FastAPI(
    title="Financial Agent System"
)

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes

app.include_router(
    upload_router,
    prefix="/api"
)

app.include_router(
    research_router,
    prefix="/api"
)

@app.get("/")
def root():
    return {
        "message":
        "Financial Agent System Running"
    }