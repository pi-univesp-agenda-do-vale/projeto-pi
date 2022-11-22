import React from "react";
import logo from "../images/logo.PNG"
import whatsapp from "../images/whatsapp.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"

function Footer(){
    return (
        <div className="rodape">
            <div className="rodapeesquerdo">
                <img src={logo} /><br/>
                <h2>Agenda do Vale</h2>
            </div>
            <div className="rodapedireito">
                <div>
                    <a href="/">Home</a> <br/>
                    <a href="/dashboard">Acesso Restrito</a>
                </div>
                <div>
                    <a href="#" className="socialmedia"><img src={whatsapp} width="50px" height="50px" /> </a>
                    <a href="#" className="socialmedia"><img src={facebook} width="50px" height="50px" /> </a>
                    <a href="#" className="socialmedia"><img src={instagram} width="50px" height="50px" /> </a>
                </div>
            </div>

        </div>
        
    )
}
export default Footer;