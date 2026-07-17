import { useState, useEffect } from "react";
import "./AIChat.css";
import profile from "../data/profile.json";


function AIChat(){

const [open,setOpen]=useState(false);


useEffect(()=>{

  const openChat = () => {
    setOpen(true);
  };


  window.addEventListener(
    "openAIChat",
    openChat
  );


  return () => {

    window.removeEventListener(
      "openAIChat",
      openChat
    );

  };


},[]);



const [messages,setMessages]=useState([
{
sender:"bot",
text:`Hi 👋 I am ${profile.name}'s AI Assistant. Ask me about her skills, projects, or cybersecurity experience.`
}
]);



function reply(question){

let answer="";


question = question.toLowerCase();



if(question.includes("who") || question.includes("about")){

answer = profile.about;

}



else if(question.includes("skill")){

answer =
"Rachana works with: " + profile.skills.join(", ");

}



else if(question.includes("project")){

answer =
"Projects: " + profile.projects.join(", ");

}



else if(question.includes("role") || question.includes("job")){

answer =
profile.role;

}



else if(question.includes("contact")){

answer =
profile.contact;

}



else{

answer =
"You can ask me about Rachana's skills, projects, role, experience, or cybersecurity background.";

}



setMessages([
...messages,

{
sender:"user",
text:question
},

{
sender:"bot",
text:answer
}

]);

}




return(

<>


<button
className="chat-button"
onClick={()=>setOpen(!open)}
>
🤖
</button>



{

open &&


<div className="chat-box">


<div className="chat-header">

🤖 Rachana AI Assistant

</div>



<div className="chat-body">


{

messages.map((msg,index)=>(


<p
key={index}
className={msg.sender}
>

{msg.text}

</p>


))

}


</div>




<div className="questions">


<button
onClick={()=>reply("Who is Rachana")}
>

Who are you?

</button>



<button
onClick={()=>reply("skills")}
>

Skills

</button>



<button
onClick={()=>reply("projects")}
>

Projects

</button>



<button
onClick={()=>reply("contact")}
>

Contact

</button>


</div>



</div>


}



</>

)

}


export default AIChat;