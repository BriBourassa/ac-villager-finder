import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Villager from '../Villager/Villager';

// Villager comp = one single dude
// stick all interfaces in one file?


interface AppProps {
  
}

const App: React.FC = () => {
  const [allVillagers, setAllVillagers] = useState({});
  const [error, setError] = useState('')

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
    catch(err) {
      // setError(err)
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
  // randomize a picture each time? or just first one .find() and use that icon only OR my favs! find bones pls

  // make name a Link! route to /species
  // console.log('line 59', speciesList)

  // iterate through each obj. do a map!
  const display = Object.keys(speciesList).map((animal) => {
    return (
      <>
        <h1>{animal}</h1>
        <img src={speciesList[animal]} />
      </>
    )
  })
  return display
}
console.log(allVillagers)

return (
  <div className="App">
      {displaySpeciesList(allVillagers)}
    </div>
  );
}

export default App;
