import './App.css';

import Navbar from './Navbar'
import Card from './Card';
import list from './List';
import {useState} from 'react'


function App() {

 

  const [selected, setSelected] = useState(list);


  return (
    <div className="App">

      <Navbar />
      
      <Card  selected = {selected} setSelected={setSelected}  />
  
    </div>
  );
}

export default App;
