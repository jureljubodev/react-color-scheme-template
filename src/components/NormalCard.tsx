import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  imgLink: string;
  cardTitle: string;
  description: string;
  btnColor: string;
  btnText: string;
}

const NormalCard: React.FC<Props> = ({
  imgLink,
  cardTitle,
  description,
  btnColor,
  btnText,
}) => {
  return (
    <Card style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}>
      <Card.Img
        variant="top"
        src={imgLink}
        style={{ maxHeight: "350px", maxWidth: "100%" }}
      />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant={btnColor}>{btnText}</Button>
      </Card.Body>
    </Card>
  );
};

export default NormalCard;
