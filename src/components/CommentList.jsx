import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment  from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup>
    {commentsToShow.map((comment) => (
      <SingleComment singleComment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
