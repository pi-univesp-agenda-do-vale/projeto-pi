import React from "react";
import './styles.css'

function SideBar(){
    return (
        <ul>
            <li>
                <p>Usuário</p>
                <ul className="ulsidebar">
                    <li className="lisidebar">
                    <a href="/dashboard/users">Cadastrar</a>
                    </li>
                    <li className="lisidebar">
                    <a href="/dashboard/usersview">Listar</a>
                    </li>
                </ul>
            </li>
            <li>
                <p>Categoria</p>
                <ul className="ulsidebar">
                    <li className="lisidebar">
                    <a href="/dashboard/categories">Cadastrar</a>
                    </li>
                    <li className="lisidebar">
                    <a href="/dashboard/categoriesview">Listar</a>
                    </li>
                </ul>
            </li>
            <li>
                <p>Eventos</p>
                <ul className="ulsidebar">
                    <li className="lisidebar">
                    <a href="/dashboard/events">Cadastrar</a><br/>
                    </li>
                    <li className="lisidebar">
                    <a href="/dashboard/eventsview">Listar</a>
                    </li>
                </ul>
            </li>
        </ul>
        
    )
}

export default SideBar;