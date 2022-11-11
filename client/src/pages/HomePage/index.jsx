import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import { listEvents } from '../../services/api';
import "./styles.css";

function HomePage() {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => { 
            const response = await listEvents();
            setEvents(response.data[0]);
            setLoading(false)
        })();
    }, []);

    if (loading) {
        return <div>Carregando...</div>
    }   

    return (
        <div>
            <div className='box'>
            <svg viewBox="0 0 1440 180">
                <path fill="#006750" fill-opacity='85%' d="M0,0L480,96L960,256L1440,288L1440,0L960,0L480,0L0,0Z">
                </path>
            </svg></div>
            
            <div align='title1'><h1>Agenda do Vale</h1></div>

            <a href="/login">Login</a> <br/><br/>
            
                <div className='divEventos'>
                {
                    events.map((event, index) => (
                        <EventCard 
                            index={index} 
                            titulo={event.evento_titulo} 
                            cidade={event.evento_cidade}
                            local={event.evento_local}
                            descricao_resumo={event.evento_descricao_resumo}>
                        </EventCard>
                    ))
                }
                </div>
            </div>
        
        )
}

export default HomePage;