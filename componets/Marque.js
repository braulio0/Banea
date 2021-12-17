import Marquee from "react-fast-marquee";
import ItemCard from "./ItemCard";

const Marque = () => {
  return (
    <Marquee gradient={false}>
      <ItemCard image={"promo1.jpeg"} />
      <ItemCard image={"promo2.jpeg"} />
      <ItemCard image={"promo3.jpg"} />
      <ItemCard image={"promo4.jpeg"} /> 
      <ItemCard image={"promo5.jpeg"} />
      <ItemCard image={"promo6.jpeg"} />

    </Marquee>
  );
};
export default Marque;
