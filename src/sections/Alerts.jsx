import { motion } from "framer-motion";
import "./Alerts.css";


export default function Alerts(){

const alerts = [

{
level:"CRITICAL",
count:"03",
title:"Malware Detection"
},

{
level:"HIGH",
count:"07",
title:"Suspicious Login Attempts"
},

{
level:"MEDIUM",
count:"15",
title:"Network Anomalies"
},

{
level:"LOW",
count:"25",
title:"Policy Violations"
}

];


return (

<section className="alerts" id="alerts">


<h2>
SOC THREAT MONITORING
</h2>


<p className="alerts-desc">

Real-time security monitoring simulation based on
SIEM alerts and incident response workflow.

</p>



<div className="alerts-container">


{

alerts.map((alert,index)=>(


<motion.div

className={`alert-card ${alert.level}`}

key={index}


whileHover={{

scale:1.05

}}

>


<h3>

{alert.level}

</h3>


<div className="alert-number">

{alert.count}

</div>


<p>

{alert.title}

</p>


</motion.div>


))

}


</div>



</section>

);


}