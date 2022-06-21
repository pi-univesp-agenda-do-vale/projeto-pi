import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import EventCard from '../../components/EventCard';

function HomePage() {

    const [listEvents, setListEvents] = useState();
    //console.log(listEvents);

    useEffect(()=>{
        api.get('/events').then(response => {
            console.log(response.data);
        });
    },[])

    return (
        <div>
            <h1>Home Page</h1>
            <a href="/login">Login</a>
            {typeof listEvents !== "undefined" && listEvents.map((value)=>{
                return <EventCard key={value.id}></EventCard>;
                })
            }
            
        </div>
    )
}

export default HomePage;