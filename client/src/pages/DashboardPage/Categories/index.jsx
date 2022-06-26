import React, { useState } from 'react';
import { addCategory } from '../../../services/api';
import "./styles.css";
import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';

const CategoryPage = () => {

    const [categoria_nome, setCategoria] = useState("");

    const addCategoryFunc = (event) => {
        event.preventDefault();
        if (categoria_nome !== ""){
            
            // INSERINDO NO BANCO DE DADOS VIA API
            if (addCategory(categoria_nome)) {
                setCategoria("");
                alert("Categoria cadastrada com sucesso!");

            } else {
                alert("Verifique os campos e tente novamente");
            }
            
        } else {
            alert("Verifique todos os campos e tente novamente");
        }
    }

    return (
        <>
        <NavBar />
            <div className='divleft'>
                <SideBar />
            </div>
            <div className='divright'>
            <h2>Adicionar categoria</h2><br />
            <form
                onSubmit={addCategoryFunc}
            >
                <fieldset>
                    <label htmlFor='categoria_nome'>Nome: </label>
                    <input
                        type='text'
                        name='categoria_nome'
                        id='categoria_nome'
                        className='categoria_nome'
                        value={categoria_nome}
                        onChange={(event) => setCategoria(event.target.value)}
                        placeholder='Digite o nome da categoria aqui'
                    />
                </fieldset>
                <fieldset>
                    <button type='submit'>Enviar</button>
                </fieldset>
            </form>
            </div>
        </>
    )
}

export default CategoryPage;