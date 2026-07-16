import { motion } from "framer-motion";
import "./About.css";

export default function About() {

  const skills = [
    "Splunk",
    "Wazuh",
    "SIEM Monitoring",
    "Threat Hunting",
    "MITRE ATT&CK",
    "Incident Response",
    "EDR",
    "Python",
    "Linux",
    "Wireshark",
    "Network Security"
  ];


  return (

    <section className="about" id="about">


      <motion.div

        className="about-card"

        initial={{opacity:0,y:40}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.8}}

      >


        <h2>
          About Me
        </h2>


        <p>

          I am a Cybersecurity graduate passionate about Security
          Operations Center (SOC), threat detection, and defensive
          security operations. I enjoy analyzing security logs,
          investigating alerts, and building AI-powered security
          automation solutions.

        </p>


        <p>

          My focus areas include SIEM monitoring, incident response,
          threat intelligence, MITRE ATT&CK mapping, and blue team
          operations.

        </p>



        <div className="skills">

          {
            skills.map((skill,index)=>(

              <motion.span

                key={index}

                whileHover={{
                  scale:1.1
                }}

              >

                {skill}

              </motion.span>

            ))
          }

        </div>


      </motion.div>


    </section>

  );

}