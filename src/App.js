
import { useState } from 'react';
import './App.css';
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty';
import MenuList from './components/MenuList/MenuList';


function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }
  return (
    <div className="App">
      <h1>Dificult Picker</h1>
      <div className='container'>
        <MenuList 
          onItemClick={updateDifficulty} 
          difficulty={currentDifficulty}/>
        <DisplayDifficulty 
          difficulty = {currentDifficulty}/> 
      </div>
      
    </div>
  );
}

export default App;
