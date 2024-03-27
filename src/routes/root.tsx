import Container from "react-bootstrap/Container";
import CardLayout from "../components/CardLayout";
import CarouselComponent from "../components/CarouselComponent";

export default function Root() {
  return (
    <>
      <Container>
        <h1>Root Works!</h1>
        <p>Displays Root component</p>
        <CarouselComponent />
        <CardLayout />
      </Container>
    </>
  );
}
