import './App.css';
import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import ReadCrewmate from './pages/ReadCrewmate';
import CreateCrewmate from './pages/CreateCrewmate';
import EditCrewmate from './pages/EditCrewmate';
import More from './pages/More';

const App = () => {
  const defaultColor = 'color';
  
  const crewmates = [
    {
      id: 1, 
      name: 'Cartwheel in Chelsea 🤸🏽‍♀️',
      speed: '8', 
      color: defaultColor,
    }
  ];

  // Sets up routes
  const element = useRoutes([
    { path: "/", element: <ReadCrewmate data={crewmates} /> },
    { path: "/edit/:id", element: <EditCrewmate data={crewmates} /> },
    { path: "/new", element: <CreateCrewmate /> },
    { path: "/more/:id", element: <More data={crewmates} /> } // updated path to include id parameter
  ]);

  return ( 
    <div className="App">
      <header className="header">
        <h1>Crewmates</h1>
        <Link to="/"><button className="headerBtn">Crewmates Gallery</button></Link>
        <Link to="/new"><button className="headerBtn">Create Crewmate</button></Link>
      </header>
      {element}
    </div>
  );
};

export default App;
