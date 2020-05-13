import React, { useState } from "react";
import {
  Sidebar,
  Segment,
  Menu,
  Button,
  Checkbox,
  Label,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const SidePanel = (props) => {
  const [visible, setVisible] = useState(true);
  const onClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <>
      <Segment>
        <Checkbox
          label={
            <Label color="teal" onClick={onClick}>
              Sidebar Open{" "}
            </Label>
          }
        />
      </Segment>
      <Sidebar as={Menu} visible={visible} vertical size="wide">
        <Segment>
          <Label color="teal" onClick={onClick}>
            Close Sidebar
          </Label>
        </Segment>
        <Menu.Item header as="h1">
          Arduino Heat
        </Menu.Item>
        <Menu.Item>
          <Button as="a" color="teal" icon="sign in">
            <Link to="/login" style={{ color: "white" }}>
              로그인
            </Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" color="teal" icon="signup">
            <Link to="register" style={{ color: "white" }}>
              회원가입
            </Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" color="teal" icon="signup">
            <Link to="data" style={{ color: "white" }}>
              데이터 전송
            </Link>
          </Button>
        </Menu.Item>
      </Sidebar>
    </>
  );
};
export default SidePanel;
