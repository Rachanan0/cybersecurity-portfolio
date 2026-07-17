const responses = [
  {
    keywords: ["about", "yourself", "who are you", "introduce"],
    reply: `Hi! I'm Rachana, a Cybersecurity graduate passionate about Security Operations Center (SOC), Threat Detection, Incident Response, SIEM technologies, and AI-powered security automation.

I enjoy building practical cybersecurity solutions using Splunk, Wazuh, Python, MITRE ATT&CK, and Machine Learning. My goal is to begin my career as a SOC Analyst and contribute to strengthening organizational cyber defenses.`
  },

  {
    keywords: ["skill", "skills", "technology", "tools", "stack"],
    reply: `Technical Skills

🛡️ SIEM & Security
• Splunk Enterprise
• Wazuh SIEM
• MITRE ATT&CK
• Threat Hunting
• Incident Response
• IOC Analysis

💻 Programming
• Python
• Java
• SQL

🖥️ Operating Systems
• Linux
• Windows

🌐 Security Tools
• Wireshark
• Nmap
• Git & GitHub

🤖 AI & Automation
• AI Security
• SOC Automation`
  },

  {
    keywords: ["experience", "internship", "work"],
    reply: `Rachana has practical cybersecurity experience through internships, self-built SOC labs, and real-world security projects.

Experience includes:

• SIEM Monitoring using Splunk & Wazuh
• Threat Detection
• Log Analysis
• Incident Investigation
• MITRE ATT&CK Mapping
• IOC Extraction
• AI-assisted SOC Automation
• Security Dashboard Development

She has also completed numerous TryHackMe labs focused on Blue Team operations.`
  },

  {
    keywords: ["education", "college", "degree"],
    reply: `Rachana completed her B.Tech in Computer Science (Cybersecurity) from the Institute of Aeronautical Engineering, Hyderabad.`
  },

  {
    keywords: ["certificate", "certification", "certifications"],
    reply: `Professional Certifications

• Cyber Job Simulation – Deloitte Australia (Forage)

• Zero Trust Certified Associate (ZTCA) – Zscaler

• Zero Trust Cloud Security – Zscaler

• Ethical Hacking Certification

• Python Programming Certification

🏆 Achievement

• Top 9% Global Ranking on TryHackMe`
  },

  {
    keywords: ["tryhackme", "ranking"],
    reply: `Rachana is ranked in the Top 9% globally on TryHackMe, demonstrating practical knowledge in SOC operations, Windows security, networking, threat detection, and blue-team exercises.`
  },

  {
    keywords: ["project", "projects"],
    reply: `Major Cybersecurity Projects

🛡️ AI-Powered SOC Assistant

• Built using Python, Streamlit, Splunk Enterprise, SQLite, Plotly, and MITRE ATT&CK.
• Performs IOC Extraction, Risk Scoring, AI Investigation, Incident Summaries, and MITRE Mapping.

🎣 PhishCatcher

• Machine Learning-based phishing URL detection platform with a Flask web application.

🔐 SQL Injection Detection

• Machine Learning project for detecting SQL Injection attacks.

🌐 Cybersecurity Portfolio

• Built using React + Vite with an integrated AI Assistant to showcase projects, skills, and achievements.`
  },

  {
    keywords: ["ai-powered soc assistant", "ai soc", "soc assistant"],
    reply: `AI-Powered SOC Assistant

Tech Stack:
• Python
• Streamlit
• Splunk Enterprise
• SQLite
• Plotly
• MITRE ATT&CK

Key Features

✔ IOC Extraction

✔ Threat Intelligence

✔ Risk Scoring

✔ Incident Report Generation

✔ AI-powered Security Investigation

✔ MITRE ATT&CK Mapping

✔ Interactive Security Dashboard

This project demonstrates practical SOC Analyst workflows and Blue Team operations.`
  },

  {
    keywords: ["phishcatcher", "phishing"],
    reply: `PhishCatcher is a Machine Learning-based phishing URL detection system that classifies URLs as malicious or legitimate using ensemble learning techniques. It also includes a Flask web application for real-time prediction.`
  },

  {
    keywords: ["splunk"],
    reply: `Rachana has hands-on experience with Splunk Enterprise for:

• Log Collection
• SIEM Monitoring
• Alert Investigation
• Dashboard Creation
• Threat Hunting
• Incident Analysis`
  },

  {
    keywords: ["wazuh"],
    reply: `Rachana has worked with Wazuh SIEM for:

• Endpoint Monitoring
• Security Event Detection
• Log Analysis
• SOC Lab Setup
• Threat Monitoring`
  },

  {
    keywords: ["mitre"],
    reply: `Rachana has implemented MITRE ATT&CK Mapping within her AI-Powered SOC Assistant to categorize attacker techniques, improve investigations, and provide better threat visibility.`
  },

  {
    keywords: ["python"],
    reply: `Python is Rachana's primary programming language for:

• Security Automation
• Machine Learning
• Flask Development
• Streamlit Applications
• SOC Tools
• Cybersecurity Scripting`
  },

  {
    keywords: ["resume", "cv"],
    reply: `You can download Rachana's latest Resume directly using the Resume button on this portfolio.

It includes:

• SOC Skills
• Cybersecurity Projects
• Certifications
• Technical Skills
• Education
• Experience`
  },

  {
    keywords: ["github"],
    reply: `GitHub

https://github.com/Rachanan0

Explore Rachana's cybersecurity projects, source code, and portfolio repositories here.`
  },

  {
    keywords: ["linkedin"],
    reply: `LinkedIn

https://www.linkedin.com/in/rachana01/

Connect with Rachana to learn more about her cybersecurity journey and professional experience.`
  },

  {
    keywords: ["contact", "email"],
    reply: `Email

rachananunemunthala2001@gmail.com

Feel free to reach out for job opportunities, collaborations, or technical discussions.`
  },

  {
    keywords: ["hire", "why should we hire you"],
    reply: `Rachana is a highly motivated Cybersecurity graduate with practical SOC experience gained through projects, internships, and cybersecurity labs.

Highlights include:

✔ AI-Powered SOC Assistant

✔ Splunk & Wazuh SIEM Experience

✔ Threat Detection & Log Analysis

✔ MITRE ATT&CK Mapping

✔ Python Automation

✔ Top 9% Global TryHackMe Ranking

She is passionate about continuous learning and is ready to contribute as a SOC Analyst from day one.`
  },

  {
    keywords: ["goal", "career"],
    reply: `Rachana's career goal is to become a Security Operations Center (SOC) Analyst specializing in Threat Detection, Incident Response, SIEM Engineering, and AI-driven Cyber Defense.`
  }
];

export function getResponse(question) {
  const q = question.toLowerCase();

  for (const item of responses) {
    if (item.keywords.some(keyword => q.includes(keyword))) {
      return item.reply;
    }
  }

  return `I can answer questions about:

🛡️ Skills

💻 Projects

🤖 AI-Powered SOC Assistant

📊 Splunk & Wazuh

🎯 MITRE ATT&CK

🏆 Certifications

🎓 Education

💼 Experience

🚀 Career Goals

📄 Resume

💻 GitHub

🔗 LinkedIn

Try asking:

• Tell me about yourself

• What are your SOC skills?

• Explain your AI-Powered SOC Assistant.

• Why should we hire you?`;
}