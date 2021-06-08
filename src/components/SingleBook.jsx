import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => (
  <Card style={{ width: "14rem" }}>
    <Card.Img variant="top" className="img-fluid w-100" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;
