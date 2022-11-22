import React, { useEffect, useState } from 'react';
import NavBarPublic from '../../components/NavBarPublic';
import Footer from "../../components/Footer"
import "./styles.css";
import { useParams } from 'react-router-dom';

const EventsHomePage = () => {

    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        const response = await fetch(`http://localhost:5000/events/${id}`,{
            method: 'GET', 
            headers: {
                'Content-Type': 'aplication/json',
            },
        }).then(resp => resp.json())
        .then(data => {
            setEvento(data)
            console.log(data)
            setIsLoading(false)
        })
        .catch (err => console.log(err))
      }
      
      useEffect(() => {
        fetchData();
      }, []);

    if (isLoading == true) {
        return <div>Carregando...</div>
    }   

    return (
        <div>
            <NavBarPublic/>
            <br/>
            <div align='center'>
                <div className="evento">
                    <img src={evento[0].evento_imagem} />
                    <h2> {evento[0].evento_titulo} </h2> <br/>
                    <h4 align='right'> {evento[0].evento_local}, {evento[0].evento_data} </h4> <br/><br/>
                    <p> {evento[0].evento_descricao} </p>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
            <Footer />
        </div>
        
        )
}

export default EventsHomePage;