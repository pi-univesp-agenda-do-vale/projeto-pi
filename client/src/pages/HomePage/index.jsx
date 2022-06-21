import React, { useEffect, useState } from 'react';

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
                    <p key={index}>{event.evento_titulo} ocorrerá na cidade de { event.evento_cidade }</p>
                ))
            }
            

        </div>
    )
}

export default HomePage;