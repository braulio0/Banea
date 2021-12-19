import NavBar from "../Componets/NavBar";
import ItemCard from "../Componets/ItemCard";
import { Container, Row, Col } from "react-bootstrap-v5";
import styles from "../styles/Store.module.css";
import Marque from "../Componets/Marque";

const Store = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} className="p-3 shadow-lg mb-3 bg-white roundede">
            <h3>Promociones</h3>
          </Col>
          <Col xs={12} className="p-3 mb-3">
            <Marque />
          </Col>
          <Col xs={12} className="p-3 shadow-lg mb-3 bg-white roundede">
            <h3>Recomendado</h3>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"chileNahogada.jpeg"}
              details={"Es una prueba"}
              titulo={"Chile"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"molePollo.jpeg"}
              details={"Es una prueba"}
              titulo={"Mole"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"pozole.jpeg"}
              details={"Es una prueba"}
              titulo={"Pozole"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"Tamales.jpeg"}
              details={"Es una prueba"}
              titulo={"Tamalitos"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"zope.jpeg"}
              details={"Es una prueba"}
              titulo={"Sope"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"chileNahogada.jpeg"}
              details={"Es una prueba"}
              titulo={"Chile"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"molePollo.jpeg"}
              details={"Es una prueba"}
              titulo={"Mole"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"pozole.jpeg"}
              details={"Es una prueba"}
              titulo={"Pozole"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"Tamales.jpeg"}
              details={"Es una prueba"}
              titulo={"Tamalitos"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"zope.jpeg"}
              details={"Es una prueba"}
              titulo={"Sope"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"chileNahogada.jpeg"}
              details={"Es una prueba"}
              titulo={"Chile"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"molePollo.jpeg"}
              details={"Es una prueba"}
              titulo={"Mole"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"pozole.jpeg"}
              details={"Es una prueba"}
              titulo={"Pozole"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"Tamales.jpeg"}
              details={"Es una prueba"}
              titulo={"Tamalitos"}
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
            <ItemCard
              image={"zope.jpeg"}
              details={"Es una prueba"}
              titulo={"Sope"}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Store;
