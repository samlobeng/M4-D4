import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import CommentList from "./CommentList";
import SingleComment from "./SingleComment";

class AddComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    }
  }

  sendComment = async (e) =>{
      e.preventDefault()
      try {
          let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
              method: 'POST',
              body: JSON.stringify(this.state.comment),
              headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2JhOWNlYWY0ODAwMTVjOTE4NjYiLCJpYXQiOjE2MjMyNjYxMTQsImV4cCI6MTYyNDQ3NTcxNH0.Uua4onk-6A4F965KdAz2q5ZkPaEKLTZFhGZQZ1fSx9c",
                "Content-type": "application/json",
            }
          })
          if(response.ok){
              alert('Comment successfully sent')
              window.location.reload(true);
          }
          
      } catch (error) {
          console.log(error)
      }
  }
  render() {
    return (
      <Form onSubmit={this.sendComment}>
        <Row>
          <Col>
            <Form.Control placeholder="Comments..."
            value = {this.state.comment.comment}
            onChange = {e => this.setState({
                comment:{
                    ...this.state.comment,
                   comment: e.target.value 
                } 
            })}
            />
            <Form.Control type="number" placeholder="Rating[1-5]..." 
            value = {this.state.comment.rate}
            onChange = {e => this.setState({
                comment:{
                    ...this.state.comment,
                   rate: e.target.value 
                } 
            })}
            />
            <Button
              variant="info"
              style={{ marginTop: "5px", marginBottom: "5px" }}
              type ="submit"
            >
              Add comment
            </Button>
           
          </Col>
        </Row>
      </Form>
    );
  }
}

export default AddComment;
