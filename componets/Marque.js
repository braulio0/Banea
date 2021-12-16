import Marquee from "react-fast-marquee";
import ItemCard from "./ItemCard";

const Marque = () => {
  return (
    <Marquee gradient={false}>
      <ItemCard image={"flautas.jpeg"} />
      <ItemCard image={"pozole.jpeg"} />
      <ItemCard image={"tacos.jpeg"} />
      <ItemCard image={"Tamales.jpeg"} /> 
      <ItemCard image={"zope.jpeg"} />
      <ItemCard image={"chileNahogada.jpeg"} />

    </Marquee>
  );
};
export default Marque;
