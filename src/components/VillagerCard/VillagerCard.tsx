import React from 'react';
import Villager from '../../types/Villager';
import './VillagerCard.css'

interface IAppProps {
    villager: Villager
}

const VillagerCard: React.FC<IAppProps> = ({ villager }) => {
const { imageUri, name, hobby, personality, catchPhrase } = villager
  return (
    <>
    <div className='villager-card'>
        <img className='display-img' src={`${imageUri}`} />
        <div className='stats'>
            <h1>{name}</h1>
            <h2>Personality: {personality}</h2>
            <h2>Hobby: {hobby}</h2>
            <h3>catch-phrase: "{catchPhrase}"</h3>
        </div>
    </div>
    </>
  )
};

export default VillagerCard;

