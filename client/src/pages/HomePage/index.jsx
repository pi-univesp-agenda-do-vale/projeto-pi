import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import { listEvents } from '../../services/api';

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
            <h1>Home Page</h1>
            <a href="/login">Login</a>

            {
                events.map((event, index) => (
                    <EventCard 
                        index={index} 
                        titulo={event.evento_titulo} 
                        cidade={event.evento_cidade}>
                    </EventCard>
                ))
            }
            

        </div>
    )
}

export default HomePage;