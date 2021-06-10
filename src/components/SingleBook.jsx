import { Card } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";
class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          style={{ transform: this.state.selected ? "scale(0.6)" : "none" }}
        >
          <Card.Img
            variant="top"
            className="img-fluid w-100"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin ={this.props.book.asin}/>}
      </>
    );
  }
}

export default SingleBook;
