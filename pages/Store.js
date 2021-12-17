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
        <Row className="d-flex justify-content-center">
          <Col xs={12} className="p-3">
            <h3>Promociones</h3>
          </Col>
          <Col xs={12}>
            <Marque />
          </Col>
          <Col xs={12} className="p-3">
            <h4>Recomendado</h4>
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"chileNahogada.jpeg"}
              details={"Es una prueba"}
              titulo={"Chile"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"molePollo.jpeg"}
              details={"Es una prueba"}
              titulo={"Mole"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"pozole.jpeg"}
              details={"Es una prueba"}
              titulo={"Posolazo"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"Tamales.jpeg"}
              details={"Es una prueba"}
              titulo={"Tamalitos"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"zope.jpeg"}
              details={"Es una prueba"}
              titulo={"Sope"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"chileNahogada.jpeg"}
              details={"Es una prueba"}
              titulo={"Chile"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"molePollo.jpeg"}
              details={"Es una prueba"}
              titulo={"Mole"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"pozole.jpeg"}
              details={"Es una prueba"}
              titulo={"Posolazo"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"Tamales.jpeg"}
              details={"Es una prueba"}
              titulo={"Tamalitos"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"zope.jpeg"}
              details={"Es una prueba"}
              titulo={"Sope"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"flautas.jpeg"}
              details={"Es una prueba"}
              titulo={"Flautas"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"tacos.jpeg"}
              details={"Es una prueba"}
              titulo={"Tacos"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"chileNahogada.jpeg"}
              details={"Es una prueba"}
              titulo={"Chile"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"molePollo.jpeg"}
              details={"Es una prueba"}
              titulo={"Mole"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"pozole.jpeg"}
              details={"Es una prueba"}
              titulo={"Posolazo"}
            />
          </Col>
          <Col xs={12} md={4}>
            <ItemCard
              image={"Tamales.jpeg"}
              details={"Es una prueba"}
              titulo={"Tamalitos"}
            />
          </Col>
          <Col xs={12} md={4}>
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
