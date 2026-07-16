from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json


app = Flask(__name__)

CORS(app)


with open("profile.json", "r") as file:
    profile = json.load(file)



@app.route("/chat", methods=["POST"])
def chat():

    user_message = request.json["message"]


    prompt = f"""
You are Rachana AI Assistant.

Answer questions about Rachana using this information:

{profile}

User question:
{user_message}

Give a professional cybersecurity-focused answer.
"""


    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "gemma3",
            "prompt": prompt,
            "stream": False
        }
    )


    data = response.json()


    return jsonify({
        "reply": data["response"]
    })



if __name__ == "__main__":

    app.run(port=5000)