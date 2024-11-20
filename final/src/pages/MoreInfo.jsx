import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './MoreInfo.css';
import { supabase } from '../client';
import edit from '../components/edit.png';

const MoreInfo = ({data}) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('Posts')
                    .select('id, title, author, description, created_at, like_count')
                    .eq('id', id)
                    .single(); // Fetch single crewmate

                if (error) {
                    throw error; // Handle the error
                }

                setPost(data);
                setCount(data.like_count || 0); // Set the initial count from database
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const updateCount = async (event) => {
        event.preventDefault();
    
        const newCount = count + 1;
        
        // Update the count in the database
        const { error } = await supabase
          .from('Posts')
          .update({ like_count: newCount })
          .eq('id', id);
          
        if (error) {
          console.error("Error updating count:", error);
        } else {
          setCount(newCount); // Update the count locally after successful DB update
        }
      };

    if (loading) {
        return <h2>Loading Post Details...</h2>;
    }

    if (error) {
        return <h2>Error loading post data 😞</h2>;
    }

    if (!post) {
        return <h2>No Posts Found 😞</h2>;
    }

    return (
        <div className="more-info">
            <div className="header-section">
                <h1>{post.title}</h1>
                <Link to={`/edit/${post.id}`}>
                    <img className="editButton" alt="edit button" src={edit} />
                </Link>
            </div>
            <h2>Author: {post.author}</h2>
            <h2>Description: {post.description}</h2>
            <p><strong>Created at:</strong> {new Date(post.created_at).toLocaleString()}</p>
            <p className="upvotes">Upvotes: {count}</p>
            <button className="likeButton" onClick={updateCount}>Upvote</button>
        </div>
    );
};

export default MoreInfo;
