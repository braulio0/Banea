import Marquee from "react-fast-marquee";
import ItemCard from "./ItemCard";

const Marque = () => {
  return (
    <Marquee>
      <ItemCard image={'flautas.jpeg'} details={'rico rico'} />
      <ItemCard image={'pozole.jpeg'} details={'rico rico'}/>
      <ItemCard image={'tacos.jpeg'} details={'rico rico'}/>
      <ItemCard image={'Tamales.jpeg'} details={'rico rico'}/>
    </Marquee>
  );
};
export default Marque;
