import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import catData from './data/catData';
import Dog from './data/dog';
import dogData from './data/dog-data';


function App() {
	// JavaScript code can be inserted here!

	const [cats, setCats] = useState<Array<Cat>>(catData);
	const [dogs, setDogs] = useState<Array<Dog>>(dogData);

	const catCount = cats.length;
	const dogCount = dogs.length;

	return (
		<>
			<Navbar />
			<Header catCount={ catCount } dogCount = { dogCount }/>

			<main>
				<div className='cards__wrapper'>
					{
						cats.map((cat, index) => 
							<CatCard 
								key = {cat.id} 
								name={cat.name} 
								species={cat.species} 
								favFoods={cat.favFoods} 
								birthYear={cat.birthYear} 
								catIndex={index} />)
					}					
					</div>
					<div className='cards__wrapper'>
					{
						dogs.map((dog) => 
							<CatCard 
								key = {dog.id} 
								name={dog.name} 
								species={dog.species} 
								favFoods={dog.favFoods} 
								birthYear={dog.birthYear} />)
					}					
					</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
