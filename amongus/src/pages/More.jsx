import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './InfoCrewmate.css';
import { supabase } from '../client';
import edit from '../components/edit.png';

const More = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCrewmate = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('Crewmates')
                    .select('*')
                    .eq('id', id)
                    .single(); // Fetch single crewmate

                if (error) {
                    throw error; // Handle the error
                }

                setCrewmate(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCrewmate();
    }, [id]);

    if (loading) {
        return <h2>Loading Crewmate Details...</h2>;
    }

    if (error) {
        return <h2>Error loading crewmate data 😞</h2>;
    }

    if (!crewmate) {
        return <h2>No Crewmate Found 😞</h2>;
    }

    return (
        <div>
            <h1>{crewmate.name}</h1>
            <h2>Speed: {crewmate.speed} mph</h2>
            <h2>Color: {crewmate.color}</h2>
            <Link to={`/edit/${crewmate.id}`}>
                <img className="editButton" alt="edit button" src={edit} />
            </Link>
        </div>
    );
};

export default More;
