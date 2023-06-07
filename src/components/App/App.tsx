import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Villager from '../Villager/Villager';
import Header from '../Header/Header';
import { Switch, Route, Link } from 'react-router-dom';
import '../../assets/fonts/FinkHeavy.ttf';

const App: React.FC = () => {
  const [allVillagers, setAllVillagers] = useState<{ [key: string]: Villager }>(
    {}
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchAllVillagers();
  }, []);

  const fetchAllVillagers = async () => {
    const url = 'http://acnhapi.com/v1/villagers';
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('There was a problem');
      }
      const data = await res.json();
      setAllVillagers(data);
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };

  const displaySpeciesList = () => {
    const speciesList = Object.values(allVillagers).reduce(
      (acc: { [key: string]: Villager[] }, cur) => {
        if (!acc[cur.species]) {
          acc[cur.species] = [];
        }
        acc[cur.species].push(cur)
        return acc;
      },
      {}
    );

    const display = Object.keys(speciesList).map((animal) => {
      return (
        <Link to="/:species">
          <div className="single-species">
            <img src={speciesList[animal][0].icon_uri} />
            <h1>{animal}</h1>
          </div>
        </Link>
      );
    });
    return display;
  };
  // console.log(allVillagers)

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <h2>choose a villager type to see more</h2>
          <div className="species-container">
            {displaySpeciesList()}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
