import NavBar from "./../componets/NavBar";
import ItemCard from "../componets/ItemCard";
import { Container, Row, Col } from "react-bootstrap-v5";
import styles from '../styles/Store.module.css'


const Store = () => {
  return (
    <>
      <NavBar />
      <Container className={styles.container} >
        <Row className="justify-content-md-center">
          <Col xs={6} md={6} lg={4}>
            <ItemCard image={"flautas.jpeg"} details={"rico rico"} />
          </Col>
          <Col xs={6} md={6} lg={4}>
            <ItemCard image={"molePollo.jpeg"} details={"rico rico"} />
          </Col>
          <Col xs={6} md={6} lg={4}>
            <ItemCard image={"pozole.jpeg"} details={"rico rico"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Store;
