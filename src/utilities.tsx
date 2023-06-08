import Villager from './types/Villager';

const cleanData = (data: { [key: string]: any }) => {
  return Object.values(data).reduce(
    (acc: { [key: string]: Villager[] }, cur) => {
      if (!acc[cur.species]) {
        acc[cur.species] = [];
      }
      acc[cur.species].push({
        id: cur.id,
        name: cur.name['name-USen'],
        species: cur.species,
        personality: cur.personality,
        birthday: cur['birthday-string'],
        hobby: cur.hobby,
        catchPhrase: cur['catch-phrase'],
        imageUri: cur['image_uri'],
        iconUri: cur['icon_uri'],
      });
      return acc;
    },
    {}
  );
};

export default cleanData;
