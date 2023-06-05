import React, { FC, useState, useEffect } from 'react';
import './App.css';

const App:FC = () => {

  const [allVillagers, setAllVillagers] = useState([]);
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
      // console.log(data)
      setAllVillagers(data)
      displaySpeciesList(data)
    }
    catch(err) {
      // setError(err)
      console.log(err)
    }
  }

  

  const displaySpeciesList = (villagers): void => {
    const speciesList = Object.values(villagers).reduce((acc: string[], cur) => {
      if(!acc.includes(cur.species)) {
        acc.push(cur.species)
      }
      return acc
  },[]);
  console.log('line 59', speciesList)
}


  return (
    <div className="App">

    </div>
  );
}

export default App;
