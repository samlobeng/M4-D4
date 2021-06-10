import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class Successful extends Component{
    render(){
        return (
<Alert variant="success">
    <Alert.Heading>Success</Alert.Heading>
    <p>Your Registration was successful</p>
    <hr />
  </Alert>
        )
    }
}
export default Successful;
