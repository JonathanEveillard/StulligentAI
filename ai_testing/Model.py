import requests
import json
import os

# API_KEY = "YOUR_API_KEY" ---> This is the API key you got from OpenAI
# Define your API key above or use the environment variable
Api_Key =  os.environ.get("API_KEY")

# Define the URL and headers
url = "https://openrouter.ai/api/v1/chat/completions"
headers = {
    "Authorization": f"Bearer {Api_Key}",
    "Content-Type": "application/json"
}

# Define the data payload
data = json.dumps({
    "model": "openai/gpt-4-0314",
    "messages": [
        { "role": "user", "content": "What is the meaning of life?" }
    ],
    "max_tokens": 50
})

# Make the POST request
response = requests.post(url, headers=headers, data=data)

# Print the response
print(response.json())