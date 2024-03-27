import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NormalCard from "./NormalCard";

const CardLayout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NormalCard
            imgLink="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cardTitle="Something different."
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnColor="primary"
            btnText="Went elsewhere"
          />
        </Col>
        <Col>
          {" "}
          <NormalCard
            imgLink="https://images.pexels.com/photos/16538160/pexels-photo-16538160/free-photo-of-photo-of-a-young-man-crouching-above-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cardTitle="Lorem ipsum"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnColor="secondary"
            btnText="Check out"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <NormalCard
            imgLink="https://images.pexels.com/photos/8858630/pexels-photo-8858630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cardTitle="Pigeon Story"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnColor="danger"
            btnText="Read more"
          />
        </Col>
        <Col>
          {" "}
          <NormalCard
            imgLink="https://images.pexels.com/photos/432140/pexels-photo-432140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cardTitle="Something different."
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnColor="primary"
            btnText="Went elsewhere"
          />
        </Col>
        <Col>
          {" "}
          <NormalCard
            imgLink="https://images.pexels.com/photos/443376/pexels-photo-443376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            cardTitle="Something different."
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            btnColor="primary"
            btnText="Went elsewhere"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardLayout;
