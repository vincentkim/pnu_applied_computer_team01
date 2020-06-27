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

// 왼쪽 사이드바 기능
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
        <Menu.Item>
          <Button as="a" color="teal" icon="signup">
            <Link to="arduino-register" style={{ color: "white" }}>
              아두이노 등록
            </Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" color="teal" icon="signup">
            <Link to="arduino-unregister" style={{ color: "white" }}>
              미등록 아두이노 조회 
            </Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" color="teal" icon="signup">
            <Link to="specific-arduino" style={{ color: "white" }}>
              특정 아두이노 데이터 조회
            </Link>
          </Button>
        </Menu.Item>
      </Sidebar>
    </>
  );
};
export default SidePanel;
