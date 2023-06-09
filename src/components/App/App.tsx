import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Villager from '../../types/Villager';
import Header from '../Header/Header';
import { Switch, Route, Link } from 'react-router-dom';
import cleanData from '../../utilities';
import VillagerTypesList from '../VillagerTypesList/VillagerTypesList';
import VillagerDetails from '../VillagerDetailsList/VillagerDetailsList';

const App: React.FC = () => {
  const [allVillagers, setAllVillagers] = useState<{
    [species: string]: Villager[];
  }>({});
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchAllVillagers();
  }, []);

  const fetchAllVillagers = async () => {
    const url = 'http://acnhapi.com/v1/villagers/';
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('There was a problem');
      }
      const data = await res.json();
      const cleanedData = cleanData(data);
      setAllVillagers(cleanedData);
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/">
          <h2 className="testing">choose a villager type to see more</h2>
          <div className="species-container">
            <VillagerTypesList allVillagers={allVillagers} />
          </div>
        </Route>

        <Route
          path={'/:species'}
          render={({ match }) => {
            return (
              <div className='species-container'>
                <VillagerDetails
                  villagerSpecies={allVillagers[match.params.species]}
                />
              </div>
            );
          }}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
