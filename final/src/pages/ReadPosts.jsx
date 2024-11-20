import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [sortCriterion, setSortCriterion] = useState('created_at');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const {data, error} = await supabase
                .from('Posts')
                .select()
                .order(sortCriterion, { ascending: false })
            if (error) {
                console.error('Error fetching posts:', error);
            } else{
                setPosts(data);
                setFilteredPosts(data);
            }
        };
        fetchPosts();
    }, [sortCriterion]);
    
    const handleSortChange = (event) => {
        setSortCriterion(event.target.value); // Update the sorting criterion
    };
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = posts.filter((post) => 
            post.title.toLowerCase().includes(query)
        );
        setFilteredPosts(filtered);
    }

    return (
        <div className="ReadPosts">

            <div className="controls">
                <label htmlFor="sortPosts">Sort by: </label>
                <select id="sortPosts" value={sortCriterion} onChange={handleSortChange}>
                    <option value="created_at">Newest</option>
                    <option value="like_count">Upvotes</option>
                </select>

                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>

            {filteredPosts && filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <Card
                            key={post.id}
                            data={post}
                        />
                    ))
            ) : (
                <h2>{'No Posts Yet 😞'}</h2>
            )}

        </div>  
    )
}

export default ReadPosts;