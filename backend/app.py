from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

with open("profile.json", "r", encoding="utf-8") as f:
    profile = json.load(f)


@app.route("/chat", methods=["POST"])
def chat():

    question = request.json.get("message", "").lower().strip()

    # ===========================
    # PROJECT-SPECIFIC QUESTIONS
    # ===========================

    if "ai-powered soc assistant" in question or "soc assistant" in question:
        for project in profile["projects"]:
            if project["name"].lower() == "ai-powered soc assistant":
                return jsonify({"reply": project["description"]})

    if "phishcatcher" in question:
        for project in profile["projects"]:
            if project["name"].lower() == "phishcatcher":
                return jsonify({"reply": project["description"]})

    if "soc home lab" in question:
        for project in profile["projects"]:
            if project["name"].lower() == "soc home lab":
                return jsonify({"reply": project["description"]})

    # ===========================
    # ALL PROJECTS
    # ===========================

    if "project" in question or "projects" in question:

        reply = "Here are Rachana's cybersecurity projects:\n\n"

        for project in profile["projects"]:
            reply += f"🔹 {project['name']}\n"
            reply += f"{project['description']}\n\n"

        return jsonify({"reply": reply})

    # ===========================
    # SKILLS
    # ===========================

    if any(word in question for word in [
        "skill",
        "skills",
        "technology",
        "technologies",
        "tool",
        "tools"
    ]):

        return jsonify({
            "reply":
            "Rachana has hands-on experience with:\n\n• " +
            "\n• ".join(profile["skills"])
        })

    # ===========================
    # EXPERIENCE
    # ===========================

    if any(word in question for word in [
        "experience",
        "internship",
        "work",
        "worked"
    ]):

        return jsonify({
            "reply": profile["experience"]
        })

    # ===========================
    # EDUCATION
    # ===========================

    if any(word in question for word in [
        "education",
        "college",
        "degree",
        "graduate"
    ]):

        return jsonify({
            "reply": profile["education"]
        })

    # ===========================
    # CERTIFICATIONS
    # ===========================

    if any(word in question for word in [
        "certificate",
        "certification",
        "certifications"
    ]):

        return jsonify({
            "reply":
            "Certifications:\n\n• " +
            "\n• ".join(profile["certifications"])
        })

    # ===========================
    # ACHIEVEMENTS
    # ===========================

    if any(word in question for word in [
        "achievement",
        "achievements",
        "award",
        "tryhackme"
    ]):

        return jsonify({
            "reply":
            "Achievements:\n\n• " +
            "\n• ".join(profile["achievements"])
        })

    # ===========================
    # CAREER GOAL
    # ===========================

    if any(word in question for word in [
        "goal",
        "career",
        "job",
        "looking"
    ]):

        return jsonify({
            "reply": profile["career_goal"]
        })

    # ===========================
    # CONTACT
    # ===========================

    if any(word in question for word in [
        "github",
        "linkedin",
        "email",
        "contact"
    ]):

        return jsonify({
            "reply":
f"""📧 Email
{profile["email"]}

💼 LinkedIn
{profile["linkedin"]}

💻 GitHub
{profile["github"]}"""
        })

    # ===========================
    # ABOUT
    # ===========================

    if any(phrase in question for phrase in [
        "who is rachana",
        "tell me about rachana",
        "introduce rachana",
        "who are you",
        "about yourself",
        "introduce yourself"
    ]):

        return jsonify({
            "reply": profile["about"]
        })

    # ===========================
    # DEFAULT
    # ===========================

    return jsonify({
        "reply":
        "👋 Hi! I'm Rachana's AI Assistant.\n\nYou can ask me about:\n\n"
        "• Skills\n"
        "• Projects\n"
        "• Experience\n"
        "• Certifications\n"
        "• Education\n"
        "• Career Goals\n"
        "• TryHackMe Ranking\n"
        "• GitHub\n"
        "• LinkedIn"
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)