import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';

function App() {
	// JavaScript code can be inserted here!
	const [cats, setCats] = useState<Array<Cat>>(
		[
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
			 }
	 ]
	);

	return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>
					{
						cats.map((cat, index) => 
							<CatCard 
								name={cat.name} 
								species={cat.species} 
								favFoods={cat.favFoods} 
								birthYear={cat.birthYear} 
								catIndex={index} />)
					}					
					</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
