import { motion } from "framer-motion";
import "./Projects.css";


export default function Projects(){


const projects=[

{
title:"AI-Powered SOC Assistant",

description:
"AI-driven security platform for threat detection, log analysis, MITRE ATT&CK mapping and automated incident reporting.",

tools:[
"Python",
"Splunk",
"Wazuh",
"MITRE ATT&CK",
"Streamlit"
],

github:
"https://github.com/Rachanan0/AI-SOC-Assistant"

},


{
title:"PhishCatcher",

description:
"Machine learning based phishing detection system that identifies malicious URLs using classification models.",

tools:[
"Python",
"Machine Learning",
"Flask",
"SQLite"
],

github:
"#"

}


];



return(


<section className="projects" id="projects">


<h2>
SECURITY PROJECTS
</h2>


<div className="projects-container">


{
projects.map((project,index)=>(


<motion.div

className="project-card"

key={index}

whileHover={{
scale:1.05
}}

>


<h3>

{project.title}

</h3>


<p>

{project.description}

</p>



<div className="project-tools">

{

project.tools.map((tool,i)=>(

<span key={i}>

{tool}

</span>

))

}

</div>



<a

href={project.github}

target="_blank"

rel="noreferrer"

>

View GitHub →

</a>



</motion.div>


))

}


</div>


</section>


)

}