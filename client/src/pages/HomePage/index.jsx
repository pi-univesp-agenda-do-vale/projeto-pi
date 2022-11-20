import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import NavBarPublic from '../../components/NavBarPublic';
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
            <NavBarPublic />

            <a href="/login">Login</a> <br/><br/>
            
                <div className='divEventos'>
                {
                    events.map((event, index) => (
                        <EventCard 
                            index={index} 
                            titulo={event.evento_titulo} 
                            cidade={event.evento_cidade}
                            local={event.evento_local}
                            descricao_resumo={event.evento_descricao_resumo}
                            imagem={event.evento_imagem}>
                        </EventCard>
                    ))
                }
                </div>
            </div>
        
        )
}

export default HomePage;