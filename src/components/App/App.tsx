import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Villager from '../Villager/Villager';
import Header from '../Header/Header';



const App: React.FC = () => {
  const [allVillagers, setAllVillagers] = useState({});
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchAllVillagers()
  }, [])

  const fetchAllVillagers = async () => {
    const url ='http://acnhapi.com/v1/villagers'
    try {
      const res = await fetch(url)
      if(!res.ok) {
        throw new Error("There was a problem")
      }
      const data = await res.json()
      setAllVillagers(data)
    }
    catch(err: any) {
      setError(err)
      console.log(err)
    }
  }

  const displaySpeciesList = (villagers: Villager) => {
    const speciesList = Object.values(villagers).reduce((acc, cur) => {
      if(!acc[cur.species]) {
        acc[cur.species] = cur.icon_uri
      }
      return acc
    }, {});
  // randomize a picture each time? or just first one .find() and use that icon 

  // make name a Link! route to /species

  const display = Object.keys(speciesList).map((animal) => {
    return (
        <div className='single-species'>
          <img src={speciesList[animal]} />
          <h1>{animal}</h1>
        </div>
    )
  })
  return display
}
console.log(allVillagers)

return (
  <div className="App">
    <Header />
    <h2>choose a villager type to see more</h2>
    <div className='species-container'>
   
        {displaySpeciesList(allVillagers)}
   
    </div>
  </div>
  );
}

export default App;
