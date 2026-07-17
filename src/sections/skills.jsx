import { motion } from "framer-motion";
import "./Skills.css";

import {
  FaDocker,
  FaDatabase,
  FaLinux,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiSplunk,
  SiWireshark,
  SiTensorflow,
} from "react-icons/si";


export default function Skills(){


const skills=[

{
title:"Programming",
icon:<FaCode/>,
items:[
"Python",
"JavaScript",
"SQL",
"React.js",
"Node.js"
]
},


{
title:"Security Operations",
icon:<FaShieldAlt/>,
items:[
"SOC Monitoring",
"Threat Detection",
"Incident Response",
"MITRE ATT&CK",
"Log Analysis"
]
},


{
title:"Security Tools",
icon:<SiSplunk/>,
items:[
"Splunk",
"Wazuh",
"Wireshark",
"Nmap",
"Burp Suite"
]
},


{
title:"AI & Machine Learning",
icon:<SiTensorflow/>,
items:[
"TensorFlow",
"Pandas",
"NumPy",
"ML Classification",
"AI Security"
]
},


{
title:"Cloud & DevOps",
icon:<FaDocker/>,
items:[
"Docker",
"Linux",
"Git",
"GitHub",
"CI/CD"
]
},


{
title:"Databases",
icon:<FaDatabase/>,
items:[
"MongoDB",
"PostgreSQL",
"SQLite",
"Database Security"
]
}


];



return(

<section
className="skills"
id="skills"
>


<h2>
TECHNICAL SKILLS
</h2>



<div className="skills-container">


{

skills.map((skill,index)=>(


<motion.div

className="skill-card"

key={index}


whileHover={{
scale:1.05,
y:-8
}}

>


<div className="skill-icon">

{skill.icon}

</div>



<h3>

{skill.title}

</h3>



<div className="skill-list">

{

skill.items.map((item,i)=>(

<span key={i}>

{item}

</span>

))

}

</div>



</motion.div>


))

}


</div>


</section>

)

}