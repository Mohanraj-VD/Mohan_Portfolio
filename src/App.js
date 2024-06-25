import './App.css';
import Profile from './Component/Profile.jsx';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = 'Mohanraj\'s Portfolio';
    }, []);
  return (
    <>
    <div className="App">
      <Profile name="Mohanraj V"/>
    </div>
   </>
  );
  
}

export default App;
