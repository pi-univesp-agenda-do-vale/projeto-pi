import React from "react";
import './styles.css'

function SideBar(){
    return (
        <ul className="nodot">
            <li>
                <p>Usuário</p>
                <ul className="ulsidebar">
                    <li>
                    <a href="/dashboard/users">Cadastrar</a>
                    </li>
                    <li>
                    <a href="/dashboard/usersview">Listar</a>
                    </li>
                </ul>
            </li>
            <li>
                <p>Categoria</p>
                <ul className="ulsidebar">
                    <li>
                    <a href="/dashboard/categories">Cadastrar</a>
                    </li>
                    <li>
                    <a href="/dashboard/categoriesview">Listar</a>
                    </li>
                </ul>
            </li>
            <li>
                <p>Eventos</p>
                <ul className="ulsidebar">
                    <li>
                    <a href="/dashboard/events">Cadastrar</a><br/>
                    </li>
                    <li>
                    <a href="/dashboard/eventsview">Listar</a>
                    </li>
                </ul>
            </li>
        </ul>
        
    )
}

export default SideBar;