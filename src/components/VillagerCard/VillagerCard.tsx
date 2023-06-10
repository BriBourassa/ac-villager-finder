import React from 'react';
import Villager from '../../types/Villager';

interface IAppProps {
    villager: Villager
}

const VillagerCard: React.FC<IAppProps> = ({ villager }) => {
const { imageUri, name, hobby, personality } = villager
  return (
    <div className='villager-card'>
        <img src={`${imageUri}`} />
        <h1>{name}</h1>
        <h2>{hobby}</h2>
    </div>
  )
};

export default VillagerCard;

