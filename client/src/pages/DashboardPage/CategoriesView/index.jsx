import React, { useEffect, useState } from 'react';
import "./styles.css";
import "../../../css/csstables.css"
import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';
import { listCategories } from '../../../services/api';
import { AiOutlineEdit } from "react-icons/ai";
import { GrTrash } from "react-icons/gr"

const CategoriesView = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => { 
            const response = await listCategories();
            setCategories(response.data[0]);
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
                <h2>Categorias Cadastradas</h2><br />
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Editar</th>
                    </tr>
                {categories.map((category) => (
                    <tr className='trdata'>
                        <td> {category.categoria_nome} </td>
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

export default CategoriesView;