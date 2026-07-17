import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";
import SOCTerminal from "../components/SOCTerminal";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Aurora Background */}
      <div className="aurora"></div>

      <div className="hero-container">
        {/* Left Side */}
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="profile-wrapper">
            <img src={profile} alt="Rachana Profile" />
          </div>

          {/* Name */}
          <h1 className="hero-name">Rachana</h1>

          {/* Animated Role */}
          <h2 className="hero-role">
            <TypeAnimation
              sequence={[
                "SOC Analyst",
                1500,
                "Threat Detection Engineer",
                1500,
                "Blue Team Defender",
                1500,
                "AI Security Enthusiast",
                1500,
                "SIEM & Threat Hunting",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          {/* Description */}
          <p>
            Passionate about Threat Detection, SIEM, Splunk, Wazuh,
            AI-powered SOC Automation, MITRE ATT&CK Mapping, and Blue Team
            Operations.
          </p>

          {/* Skills */}
          <div className="badges">
            <span>Splunk</span>
            <span>Wazuh</span>
            <span>AI SOC</span>
            <span>MITRE ATT&CK</span>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <a
              href="https://github.com/Rachanan0"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rachana01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              📄 Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <SOCTerminal />
        </motion.div>
      </div>
    </section>
  );
}