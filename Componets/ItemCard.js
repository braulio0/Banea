import { Card, Image, Row } from "react-bootstrap-v5";

const ItemCard = ({ image, details, titulo }) => {
  const goIteam = () => {
    let comida = titulo.toLowerCase()
    window.location = `http://banea-asoc.great-site.net/index.php?buscar=${comida}`;
  };
  return details == null ? (
    <Image
      src={image}
      style={{ height: "20vh", "padding-left": "2em", "padding-right": "2em" }}
    />
  ) : (
    <Row className="d-flex justify-content-center py-2 ">
      <Card
        onClick={goIteam}
        style={{ width: "18rem" }}
        className="align-items-center shadow-lg mb-3 bg-white rounded btn"
      >
        <Card.Img
          src={image}
          style={{ width: "18rem", height: "256px", "object-fit": "cover" }}
        />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default ItemCard;
