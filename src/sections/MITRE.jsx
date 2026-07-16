import { motion } from "framer-motion";
import "./MITRE.css";


export default function MITRE() {


  const tactics = [

    "Initial Access",
    "Execution",
    "Persistence",
    "Privilege Escalation",
    "Defense Evasion",
    "Credential Access",
    "Discovery",
    "Command & Control",
    "Impact"

  ];


  return (

    <section className="mitre" id="mitre">


      <h2>
        MITRE ATT&CK Knowledge
      </h2>


      <p className="mitre-description">

        Understanding attacker behavior through
        MITRE ATT&CK tactics and threat detection techniques.

      </p>



      <div className="mitre-container">


        {
          tactics.map((tactic,index)=>(


            <motion.div

              className="mitre-card"

              key={index}


              initial={{
                opacity:0,
                y:30
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              transition={{
                duration:0.5,
                delay:index*0.05
              }}


              whileHover={{
                scale:1.08
              }}

            >


              <span>

                T{index+100}

              </span>


              <h3>

                {tactic}

              </h3>


            </motion.div>


          ))
        }


      </div>


    </section>

  );

}