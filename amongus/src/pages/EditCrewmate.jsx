import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditCrewmate.css';
import { supabase } from '../client';

const EditCrewmate = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ id: null, name: "", speed: "", color: "" });
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
                    .single(); // Fetch a single crewmate

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .eq('id', id);
        
        window.location.href = "/";
    };

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id);

        window.location.href = "/";
    };

    if (loading) {
        return <h2>Loading Crewmate Details...</h2>;
    }

    if (error) {
        return <h2>Error loading crewmate data 😞</h2>;
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} /><br /><br />

                <label htmlFor="speed">Speed (mph)</label><br />
                <input type="text" id="speed" name="speed" value={crewmate.speed} onChange={handleChange} /><br /><br />

                <label>Color</label><br />
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="red"
                        onChange={handleChange}
                        checked={crewmate.color === "red"}
                    />
                    <span className="color-circle" style={{ backgroundColor: 'red' }}></span> Red
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="blue"
                        onChange={handleChange}
                        checked={crewmate.color === "blue"}
                    />
                    <span className="color-circle" style={{ backgroundColor: 'blue' }}></span> Blue
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="green"
                        onChange={handleChange}
                        checked={crewmate.color === "green"}
                    />
                    <span className="color-circle" style={{ backgroundColor: 'green' }}></span> Green
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="yellow"
                        onChange={handleChange}
                        checked={crewmate.color === "yellow"}
                    />
                    <span className="color-circle" style={{ backgroundColor: 'yellow' }}></span> Yellow
                </label><br /><br />

                <input type="submit" value="Submit" onClick={updateCrewmate} />
                <button className="deleteButton" onClick={deleteCrewmate}>Delete</button>
            </form>
        </div>
    );
};

export default EditCrewmate;
