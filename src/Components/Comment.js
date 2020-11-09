import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
function Comment({ comment }) {
  return (
    <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
      <CardTitle tag="h5">{comment.name}</CardTitle>
      <CardText>{comment.body}</CardText>
    </Card>
  );
}

export default Comment;
