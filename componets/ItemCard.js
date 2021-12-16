import { Card } from "react-bootstrap-v5";

const ItemCard = ({ image, details }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} style={{height:"30vh", 'object-fit':"cover"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ItemCard;
