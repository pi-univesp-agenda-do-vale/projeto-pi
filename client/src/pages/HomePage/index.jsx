import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import NavBarPublic from '../../components/NavBarPublic';
import Footer from "../../components/Footer"
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
            <div align="right">
                <a href="/dashboard" className='link'>Acesso Restrito</a>
            </div>
            <br/>
            
                <div>
                {
                    events.map((event, index) => (
                        <EventCard 
                            index={index} 
                            id={event.evento_id}
                            titulo={event.evento_titulo} 
                            cidade={event.evento_cidade}
                            local={event.evento_local}
                            descricao_resumo={event.evento_descricao_resumo}
                            imagem={event.evento_imagem}>
                        </EventCard>
                    ))
                }
                </div>
                <br/><br/>
                <Footer />
        </div>
        
        )
}

export default HomePage;