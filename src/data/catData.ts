import { v4 as uuidv4 } from 'uuid';
import Cat from './cat';


const catData: Array<Cat> = [
  {
    name: 'Little Miss Purrfect',
    species: 'Cat',
    favFoods: ['wet food', 'dry food'],
    birthYear: 2016,
    catIndex: 0
    },
    {
      name: 'Mr Gwumpy',
      species: 'Cat',
      favFoods: ['caviar'],
      birthYear: 2016,
      catIndex: 0
    },
    {
      name: 'Dopey',
      species: 'Cat',
      favFoods: ['bugs'],
      birthYear: 2018,
      catIndex: 0
    },
    {
      name: 'Jumpy',
      species: 'Scaredy Cat',
      favFoods: ['not cucumbers!'],
      birthYear: 2008,
      catIndex: 0
    },
    {
      name: 'Meowsalot',
      species: 'Cat',
      favFoods: ['tuna', 'catnip', 'celery'],
      birthYear: 2012,
      catIndex: 0
    },
    {
      name: 'Cindy Clawford',
      species: 'Cat',
      favFoods: ['mice'],
      birthYear: 2012,
      catIndex: 0
    },
    {
      name: 'Katy Purry',
      species: 'Cat',
      favFoods: ['cigarettes', 'coffee'],
      birthYear: 2015,
      catIndex: 0
    },
    {
      name: 'Dr. Von Belly-Rub',
      species: 'Cat',
      favFoods: ['salt'],
      birthYear: 2020,
      catIndex: 0
    },
    {
      name: 'Blobby',
      species: 'Bird?',
      favFoods: ['your soul'],
      birthYear: 2020,
      catIndex: 0
    },
    {
      name: 'El Taco',
      species: 'Cat',
      favFoods: ['tequila', 'bar snax'],
      birthYear: 1995,
      catIndex: 0
    },
    {
      name: 'Nibbles',
      species: 'Hungry Cat',
      favFoods: ['blankets', 'feet', 'tinsel'],
      birthYear: 2003,
      catIndex: 0
    },
    {
      name: 'BoopySnoot',
      species: 'Tiny Cat',
      favFoods: ['milk'],
      birthYear: 2021,
      catIndex: 0
  },
  {
    name: "Captain Catface",
    species: "Sea Cattain",
    favFoods: ["fish, rum"],
    birthYear: 2016,
    catIndex: 0
  }
];

catData.forEach(cat => cat.id = uuidv4());

export default catData;