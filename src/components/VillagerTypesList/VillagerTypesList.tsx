import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App/App';
import Villager from '../../types/Villager';
import './VillagerTypesList.css'

export interface Props {
  allVillagers: Villager[];
}

// display the main page list of 35 species

const VillagerTypesList: React.FC<Props> = ({ allVillagers }) => {
  const displaySpeciesList = () => {
    const display = Object.keys(allVillagers).map((species) => {
      return (
        <Link to={`/${species}`} key={species}>
          <div className="single-species">
            <img src={allVillagers[species][0].iconUri} alt={species}/>
            <h1>{species}</h1>
          </div>
        </Link>
      );
    });
    console.log(display)
    return display;
  };

  return <div>{displaySpeciesList()}</div>;
};

export default VillagerTypesList;
