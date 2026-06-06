from langchain_openai import ChatOpenAI


class LLMService:

    @staticmethod
    def get_llm():

        return ChatOpenAI(
            model="gpt-4.1-mini",
            temperature=0
        )