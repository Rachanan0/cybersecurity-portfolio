import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {

  return (

    <section className="contact" id="contact">


      <motion.div

        className="contact-card"

        initial={{opacity:0,y:40}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.8}}

      >


        <h2>
          Let's Connect
        </h2>


        <p>
          Interested in cybersecurity, SOC operations,
          threat detection, or collaboration?
          Feel free to reach out.
        </p>



        <div className="contact-links">


          <a
            href="mailto:rachananunemunthala2001@gmail.com"
          >
            Email
          </a>


          <a
            href="https://github.com/Rachanan0"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/rachana01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>


        </div>



        <div className="terminal-text">

          <p>
            &gt; SOC Analyst Profile Loaded...
          </p>

          <p>
            &gt; Monitoring Threat Intelligence...
          </p>

          <p>
            &gt; Connection Ready ✓
          </p>

        </div>


      </motion.div>


    </section>

  );

}