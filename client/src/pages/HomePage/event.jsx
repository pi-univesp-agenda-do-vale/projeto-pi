import React, { useEffect, useState } from 'react';
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
            <NavBarPublic/>


            
            </div>
        
        )
}

export default HomePage;