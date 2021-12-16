import NavBar from "./../componets/NavBar";
import ItemCard from "../componets/ItemCard";
import { Container, Row, Col } from "react-bootstrap-v5";
import styles from "../styles/Store.module.css";
import Marque from "../componets/Marque";

const Store = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <h3>Promociones</h3>
            <Marque />
          </Col>
          <Col xs={12}>
            <h3>Recomendado</h3>
          </Col>
          <Col xs={6} md={6}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={6} md={6}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Store;
