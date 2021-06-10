import { React } from "react";
import {ListGroup,Button  } from "react-bootstrap";


const deleteComment = async (asin) =>{
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
            method: 'DELETE',
            headers:{
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2JhOWNlYWY0ODAwMTVjOTE4NjYiLCJpYXQiOjE2MjMyNjYxMTQsImV4cCI6MTYyNDQ3NTcxNH0.Uua4onk-6A4F965KdAz2q5ZkPaEKLTZFhGZQZ1fSx9c",
              "Content-type": "application/json",
          }
        })
        if(response.ok){
            alert('Comment successfully deleted')
            window.location.reload(true);
        }
        
    } catch (error) {
        console.log(error)
    }
}

const SingleComment = ({ singleComment }) => (
    <ListGroup.Item style={{ padding: "0" }} variant="info" key={singleComment._id}>
      {singleComment.comment}

      <Button
              variant="danger"
              style={{ marginTop: "5px", marginBottom: "5px", marginLeft:"5px" }}
              onClick={()=>deleteComment(singleComment._id)}
            >
              🗑
            </Button>
    </ListGroup.Item>

);
export default SingleComment