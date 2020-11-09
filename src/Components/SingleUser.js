import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Spinner,
} from "reactstrap";

const SingleUser = ({ user, loadUser }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {loadUser ? (
        <Spinner type="grow" color="success" />
      ) : (
        <Card>
          <CardBody>
            <CardTitle tag="h5">{user.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {user.phone}
            </CardSubtitle>
          </CardBody>
          <img
            width="100%"
            src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardText>{user.email}</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default SingleUser;
