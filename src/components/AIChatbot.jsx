import { useState } from "react";
import "./AIChatbot.css";


export default function AIChatbot(){

const [open,setOpen] = useState(false);


const [messages,setMessages] = useState([

{
sender:"bot",
text:"Hi 👋 I am Rachana AI Assistant. Ask me about Rachana's skills, projects, SOC experience, and cybersecurity journey."
}

]);


const [input,setInput] = useState("");

const [loading,setLoading] = useState(false);



async function sendMessage(){


if(!input.trim()) return;


const userMessage = input;



setMessages(prev => [

...prev,

{
sender:"user",
text:userMessage
}

]);



setInput("");

setLoading(true);



try{


const response = await fetch(

"http://127.0.0.1:5000/chat",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:userMessage

})

}

);



const data = await response.json();



setMessages(prev => [

...prev,

{

sender:"bot",

text:data.reply

}

]);


}

catch(error){


setMessages(prev => [

...prev,

{

sender:"bot",

text:"⚠️ Unable to connect with AI server. Please start the backend."

}

]);


}



setLoading(false);


}





return (

<>


<button

className="chat-button"

onClick={()=>setOpen(!open)}

>

🤖

</button>



{

open &&

<div className="chat-window">



<div className="chat-header">

🛡️ Rachana AI SOC Assistant

</div>




<div className="chat-body">


{

messages.map((msg,index)=>(


<div

key={index}

className={msg.sender}

>

{msg.text}

</div>


))

}



{

loading &&

<div className="bot">

Analyzing security profile...

</div>

}



</div>






<div className="chat-input">



<input


value={input}


onChange={(e)=>setInput(e.target.value)}


placeholder="Ask about Rachana..."


onKeyDown={(e)=>{

if(e.key==="Enter"){

sendMessage();

}

}}


/>




<button onClick={sendMessage}>

Send

</button>



</div>





</div>


}


</>

)

}