import Marquee from "react-fast-marquee";
import itemCard from "./ItemCard";

const Marquee = () => {
  return (
    <Marquee>
      <itemCard image={'flautas.jpeg'} details={'rico rico'} />
      <itemCard />
      <itemCard />
      <itemCard />
    </Marquee>
  );
};
export default Marquee;
