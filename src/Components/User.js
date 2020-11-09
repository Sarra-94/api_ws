import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const User = ({ user }) => {
  return (
    <div style={{ width: "200px" }}>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {user.username}
          </CardSubtitle>
          <CardText>{user.email}</CardText>
          <Link to={`/users/${user.id}`}>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;
