import "./Footer.css";


export default function Footer(){

return(

<footer className="footer">


<div className="footer-content">


<h2>
Rachana<span>.</span>
</h2>


<p>
SOC Analyst | Threat Detection | Blue Team | AI Security
</p>



<div className="footer-links">


<a
href="https://github.com/Rachanan0"
target="_blank"
rel="noreferrer"
>
GitHub
</a>



<a
href="https://www.linkedin.com/in/rachana01/"
target="_blank"
rel="noreferrer"
>
LinkedIn
</a>


<a href="#home">
Back To Top ↑
</a>


</div>



<p className="copyright">

© {new Date().getFullYear()} Rachana. Built for Cybersecurity.

</p>



</div>


</footer>

)

}