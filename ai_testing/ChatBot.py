import requests
import json
import os

UserInput= input("Enter your message: ")

API_KEY =  os.environ.get("API_KEY")
response = requests.post(
  url="https://openrouter.ai/api/v1/chat/completions",
  headers={
    "Authorization": f"Bearer {API_KEY}",
  },
  data=json.dumps({
    "model": "openai/gpt-4o-mini-2024-07-18", # Optional
    "messages": [
        { "role": "user", "content": UserInput  }
    ]
})
)