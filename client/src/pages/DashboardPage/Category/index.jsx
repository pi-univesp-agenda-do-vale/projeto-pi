import React, { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/auth';

import { addCategory } from '../../../services/api';

const CategoryPage = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

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
    <h1>Dashboard</h1>
            <button onClick={ handleLogout }>
                Sair
            </button>

            <h2>Adicionar categoria</h2>
            <form
                onSubmit={addCategoryFunc}
            >
                <fieldset>
                    <label htmlFor='categoria_nome'>Nome:</label>
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
    
    </>
    )
}

export default CategoryPage;