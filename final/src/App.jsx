import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePosts from './pages/CreatePosts'
import EditPosts from './pages/EditPosts'
import MoreInfo from './pages/MoreInfo'
import { Link } from 'react-router-dom'


const App = () => {
  
  const descr = 'yuh'

  const posts = [
      {'id':'1', 
      'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
      'author':'Harvey Milian', 
      'description': descr},
      {'id':'2', 
      'title': 'Love Lock in Paris 🔒',
      'author':'Beauford Delaney', 
      'description':descr},
      {'id':'3', 
      'title': 'Wear Pink on Fridays 🎀',
      'author':'Onika Tonya', 
      'description':descr},
      {'id':'4', 
      'title': 'Adopt a Dog 🐶',
      'author':'Denise Michelle', 
      'description':descr},
  ]
 

  // Sets up routes
  let element = useRoutes([
    { path: "/", element: <ReadPosts data={posts} /> },
    { path: "/edit/:id", element: <EditPosts data={posts} /> },
    { path: "/new", element: <CreatePosts /> },
    { path: "/more/:id", element: <MoreInfo data={posts} /> } 
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Heart & Craft</h1>
        <p className="tagline">A cozy corner for all things artsy and crafty! 🎨✨</p>
        <Link to="/"><button className="headerBtn"> Home Feed 🏠 </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Post 🖌️ </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;