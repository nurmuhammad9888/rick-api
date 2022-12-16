import './App.css';
import {useEffect, useState} from 'react';
import { Reck } from './components/Reckapi/Reck';


function App() {
  const [data, statData] = useState([])

  useEffect(() =>{
    fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then(res => res.json())
    .then(data => {
      statData(data.results)
    })

}, [])
  return (
    <div className="container">
      <h1 className='text-center mt-4 title'>The Rick and Morty</h1>
      <ul className='card-list list-unstyled d-flex flex-wrap mt-5'>
        {
          data.map(el =>(
              <Reck image={el.image} name={el.name} status={el.status} species={el.species} location={el.location.name} gender={el.gender} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
