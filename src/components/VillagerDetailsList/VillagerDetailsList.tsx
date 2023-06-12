import React from 'react';
import VillagerCard from '../VillagerCard/VillagerCard';
import Villager from '../../types/Villager';

export interface IVillagerDetailsList {
  villagerSpecies: Villager[];
}

const VillagerDetailsList: React.FC<IVillagerDetailsList> = ({
  villagerSpecies
}) => {
  const cardList = villagerSpecies.map((villager) => (
    <VillagerCard villager={villager} />
  ));
  return <div>{cardList}</div>;
};
export default VillagerDetailsList;
