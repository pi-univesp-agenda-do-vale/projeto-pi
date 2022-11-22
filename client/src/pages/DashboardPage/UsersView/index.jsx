import React, { useEffect, useState } from 'react';
import "./styles.css";
import "../../../css/csstables.css"
import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';
import { listUsers } from '../../../services/api';
import { AiOutlineEdit } from "react-icons/ai";
import { GrTrash } from "react-icons/gr"


const UsersView = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => { 
            const response = await listUsers();
            setUsers(response.data[0]);
            setLoading(false)
        })();
    }, []);

    return (
        <>
        <NavBar />
            <div className='divleft'>
                <SideBar />
            </div>
            <div className='divright'>
                <h2>Usuários Cadastrados</h2><br />
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Editar</th>
                    </tr>
                {users.map((user) => (
                    <tr className='trdata'>
                        <td> {user.usuario_id} </td>
                        <td> {user.usuario_primeiro_nome} {user.usuario_sobrenome} </td>
                        <td> {user.usuario_email} </td>
                        <td>
                            <button href='#'><AiOutlineEdit /></button>
                            <button href="#"><GrTrash /></button>
                        </td>
                    </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default UsersView;