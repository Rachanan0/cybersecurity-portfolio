import { motion } from "framer-motion";
import "./Metrics.css";

export default function Metrics() {

  const metrics = [
    {
      number: "1200+",
      title: "Logs Analyzed"
    },
    {
      number: "5+",
      title: "Security Projects"
    },
    {
      number: "Top 9%",
      title: "TryHackMe Global Rank",
      link: "https://tryhackme.com/p/rachanagoud"
    },
    {
      number: "10+",
      title: "Security Tools"
    }
  ];


  const arsenal = [
    "Splunk",
    "Wazuh",
    "Wireshark",
    "Nmap",
    "Burp Suite",
    "Python",
    "Linux",
    "MITRE ATT&CK",
    "SIEM",
    "Threat Hunting"
  ];


  return (

    <section className="metrics">


      <h2>
        SOC Performance
      </h2>


      <div className="metrics-container">

        {
          metrics.map((item,index)=>(

            <motion.div

              className="metric-card"

              key={index}

              whileHover={{
                scale:1.08
              }}

            >

              <h3>
                {item.number}
              </h3>


              <p>
                {item.title}
              </p>


              {
                item.link && (

                  <a
                    className="verify-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile ↗
                  </a>

                )
              }


            </motion.div>

          ))
        }

      </div>




      <h2 className="arsenal-title">
        Security Arsenal
      </h2>



      <div className="arsenal-container">

        {
          arsenal.map((skill,index)=>(

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


    </section>

  );

}