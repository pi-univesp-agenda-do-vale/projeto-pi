import React, { useEffect, useState } from 'react';
import "./styles.css";
import "../../../css/csstables.css"
import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';
import { listEvents } from '../../../services/api';
import { AiOutlineEdit,  } from "react-icons/ai";
import { GrTrash } from "react-icons/gr"

const EventsView = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => { 
            const response = await listEvents();
            setEvents(response.data[0]);
            setLoading(false)
        })();
    }, []);

    function deleteEvent(id){
        fetch(`https://localhost:5000/events/delete/${id}` ,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'},
        }).then(resp => resp.json()).then(data => {
            setEvents(events.filter((events) => events.evento_id !== id))
        }).catch(err => console.log(err))
    }

    return (
        <>
        <NavBar />
            <div className='divleft'>
                <SideBar />
            </div>
            <div className='divright'>
                <h2>Eventos Cadastrados</h2><br />
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Local</th>
                        <th>Data</th>
                        <th>Editar</th>
                    </tr>
                {events.map((event) => (
                    <tr className='trdata'>
                        <td> {event.evento_titulo} </td>
                        <td> {event.evento_local}, {event.evento_cidade} </td>
                        <td> {event.evento_data} </td>
                        <td>
                            <button href='#'><AiOutlineEdit /></button>
                            <button onClick={deleteEvent(event.evento_id)} ><GrTrash /></button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>
        </>
    )
}

export default EventsView;