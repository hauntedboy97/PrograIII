import React, { useState, useEffect } from 'react';
import ListaTarjetas from './ListaTarjetas'; // Import the list component

const TraerPersonas = () => {
    const [personas, setPersonas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPersonas = async () => {
            try {
                const response = await fetch('http://localhost:3000/personas');

                const data = await response.json();
                setPersonas(data);
            } catch (err) {
                setError(err);
            };
        }
        fetchPersonas();
    }, []);

    if (error) {
        return <div style={{ textAlign: 'center', margin: '50px', color: 'red' }}>Error: {error.message}</div>;
    }

    return (
        <div>
            <ListaTarjetas personas={personas} />
        </div>
    );
};

export default TraerPersonas;