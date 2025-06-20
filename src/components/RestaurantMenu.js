import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MENU_API + resId );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  //const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;


  const regularCards =
  resInfo?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const itemCardSection = regularCards.find(
  (card) => card?.card?.card?.itemCards
);
const itemCards = itemCardSection?.card?.card?.itemCards || [];



  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>

        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -    {"Rs"}  {item.card.info.price/100}
          </li> 
        ))}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
