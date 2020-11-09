import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <CardText>{post.body}</CardText>
          <Link
            to={{
              pathname: `/posts/${post.id}`,
              state: {
                title: post.title,
                body: post.body,
              },
            }}
          >
            <Button>Comments</Button>
          </Link>
        </Card>
      </Col>
    </Row>
  );
};

export default Post;
