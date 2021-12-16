import { Card, Image } from "react-bootstrap-v5";

const ItemCard = ({ image, details, titulo }) => {
  return details == null ? (
    <Image src={image} style={{ height: "20vh",  }} />
  ) : (
<Card style={{ width: '18rem' }}>
      <Card.Img
        src={image}
        style={{ width: "18rem", height: "256px", "object-fit": "cover"}}
      />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ItemCard;
