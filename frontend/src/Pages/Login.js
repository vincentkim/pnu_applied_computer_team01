import React, { useState } from "react";
import { Grid, Message, Form, Button, Icon, Header } from "semantic-ui-react";
import axios from "axios";
import { baseUrl } from "../Constants/contants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [onceClicked, setOnceCliekd] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [resultData, setResultData] = useState(null);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  let errorMsg = (
    <Message negative>
      <Icon name="ban" />
      <Message.Content>
        <Message.Header>Fail</Message.Header>
        <p>Server has Problem</p>
      </Message.Content>
    </Message>
  );
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOnceCliekd(true);
    try {
      const result = await axios.post(baseUrl + "/login", {
        ID: email,
        PW: password,
      });
      console.log(result.data);
      setEmail("");
      setPassword("");
      setLoading(false);
      setResultData(result.data);
    } catch (e) {
      setEmail("");
      setPassword("");
      setLoading(false);
      setLoginError(true);
    }
  };

  let message = "";
  if (onceClicked && loading) {
    message = (
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Login is processing</Message.Header>
          <p>Wait for second..</p>
        </Message.Content>
      </Message>
    );
  } else if (onceClicked && !loading) {
    if (resultData) {
      message = (
        <Message
          icon
          positive={resultData.resultCode === 200}
          negative={resultData.resultCode !== 200}
        >
          <Icon name="circle outline" />
          <Message.Content>
            <Message.Header>
              {resultData.resultCode === 200 ? "Success" : "Fail"}
            </Message.Header>
            <p>{resultData.msg}</p>
          </Message.Content>
        </Message>
      );
    }
  }
  return (
    <>
      <Header as="h2" icon color="violet" textAlign="center">
        <Icon name="code branch" color="violet" />
        Login to Arduino Heat
      </Header>

      <Form style={{ maxWidth: 450, marginTop: 30 }} onSubmit={onSubmit}>
        <Form.Field>
          <label>email</label>
          <input
            placeholder="email..."
            value={email}
            onChange={onChangeEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input
            placeholder="Last Name"
            value={password}
            onChange={onChangePassword}
          />
        </Form.Field>

        <Button color="violet" type="submit">
          <Icon name="sign-in" />
          Log In Test
        </Button>
      </Form>
      {!loginError && message}
      {loginError && errorMsg}
    </>
  );
};

export default Login;
