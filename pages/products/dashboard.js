import React, { useEffect, useState } from 'react'

function dashboard() {
    const[loading, setLoading] = useState(true);
    const[data, setData] = useState({});

    useEffect(() => {
        async function fetchData(){
            let response = await fetch("http://localhost:4000/dashboard");
            let data = await response.json();
            setData(data);
            setLoading(false);
        };
        fetchData();
    }, [])
    if(loading) return <h1>Loading...</h1>
  return (
    <div>
        <h1>About User</h1>
        <h2>Posts: {data.posts}</h2>
        <h2>Likes: {data.likes}</h2>
        <h2>Following: {data.following}</h2>
        <h2>Followers: {data.followers}</h2>
    </div>
  )
}

export default dashboard