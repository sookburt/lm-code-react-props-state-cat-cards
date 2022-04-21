import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cat from '../data/cat';

interface FormProps {
  cats: Cat[];
  setter: React.Dispatch<React.SetStateAction<Cat[]>>
}

const Form : React.FC<FormProps> = ({ cats, setter }) => {

  const [catName, setCatName ] = useState<string>('');
  const changeCatName = (name:string) => {setCatName(name) };
  const [catSpecies, setCatSpecies ] = useState<string>('');
  const changeCatSpecies = (species:string) => {setCatSpecies(species) };
  const [catFavFoods, setCatFavFoods ] = useState<string>('');
  const changeCatFavFoods = (foods:string) => {setCatFavFoods(foods) };
  const [catBirthYear, setCatBirthYear ] = useState<number>(0);
  const changeCatBirthYear = (inputYear:string) => { 
      const year:number = parseInt(inputYear);
      setCatBirthYear(year);
  };
  const saveCat = () => {
    const cat = buildCat() as Cat;
    setter([...cats, cat]);
    resetForm();
  };

  const buildCat = ():Cat => {
    return ({
      id: getId(),
      name: catName,
      species: catSpecies,
      favFoods: [catFavFoods],
      birthYear: catBirthYear,
      catIndex: 0
    }) as Cat;
  };

  const getId = () => {
    return uuidv4();
  }

  const resetForm = () => {
    changeCatName('');
    changeCatSpecies('');
    changeCatFavFoods('');
    changeCatBirthYear('0');
  }

  return (
		<form className='form' >
      <label htmlFor='cat_name' className='form--label'>Name:
        <input id='cat_name' className='form_input' value={catName} onChange={(e) => {changeCatName(e.currentTarget.value)}} />
      </label>
      <label htmlFor='cat_species' className='form--label'>Species:
        <input id='cat_species' className='form--input' value={catSpecies} onChange={(e) => {changeCatSpecies(e.currentTarget.value)}} />
      </label>
      <label htmlFor='fav_foods' className='form--label'>Favourite Foods (comma separated list):
      <input id='fav_foods' className='form--input' value={catFavFoods} onChange={(e) => {changeCatFavFoods(e.currentTarget.value)}} />
      </label>
      <label htmlFor='year_born' className='form--label'>Year of Birth:
      <input id='year_born' className='for-m--input' value={catBirthYear} onChange={(e) => {changeCatBirthYear(e.currentTarget.value)}} />
      </label>
      <input type='submit' className='form--button' onClick={
          (e) => {
            e.preventDefault();
            saveCat()
          }
        } value="Save your New Cat" />
    </form>
	);
}

export default Form;
