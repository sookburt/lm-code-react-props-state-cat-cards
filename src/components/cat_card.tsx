import CatCardProps from '../data/cat';

const CatCard : React.FC<CatCardProps> = (data) => 
  <div className="card">
    <h3 className="card__text card__header">{data.name}</h3>
    <p className="card__text">Species: {data.species}</p>
    <p className="card__text">Favourite Food(s): {data.favFoods}</p>
    <p className="card__text">Birth Year: {data.birthYear}</p>
  </div>

export default CatCard;