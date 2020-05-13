import React from "react";
import { Header, Icon } from "semantic-ui-react";

const User = (props) => {
  return (
    <>
      <Header as="h2" icon color="violet" textAlign="center">
        <Icon name="user md" color="violet" />
        User List
      </Header>
    </>
  );
};
export default User;
