import { motion } from "framer-motion";
import "./SOCTerminal.css";


export default function SOCTerminal(){

const logs = [

"> Initializing SOC environment...",

"> Collecting Windows Event Logs",

"> Splunk ingestion successful",

"> Wazuh agent connected",

"> Threat intelligence updated",

"> MITRE ATT&CK mapping completed",

"> Incident report generated"

];


return (

<div className="soc-terminal">


<div className="terminal-header">

<span></span>
<span></span>
<span></span>

<p>
LIVE SOC MONITOR
</p>

</div>



<div className="terminal-body">


{
logs.map((log,index)=>(


<motion.p

key={index}

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*0.5
}}

>

{log}

</motion.p>


))
}


</div>



</div>


);


}