import { Container, Row, Col,Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React from 'react'
class BookList extends React.Component{

  state = {
    search: ""
  }

  render(){
    return(
      <Container>
        <Row>
          <Col>
          <Form>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" 
            placeholder="Search for books..." 
            style={{ width: '18rem', margin:'auto' }}
            value = {this.state.search}
            onChange= {e => this.setState({search:e.target.value})}
            />
          </Form.Group>
        </Form>
          </Col>
        </Row>
    
      <Container>
      <Row>
        {
          this.props.books.filter(b=> b.title.toLowerCase().includes(this.state.search)).map(b =>(
            <Col xs={3} key={b.asin}>
              <SingleBook book ={b} />
            </Col>
  
          ))
        }
      </Row>
    </Container>
    </Container>
 )
  }
} 
 
export default BookList;
