import React, { useState } from "react";
import { Header, Grid, Form, Button, Icon, Message } from "semantic-ui-react";
import axios from "axios";
import { baseUrl } from "../Constants/contants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [onceClicked, setOnceClicked] = useState(false);
  const [error, setError] = useState(false);
  const [resultData, setResultData] = useState(null);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const message = loading && (
    <Message icon>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Login is processing</Message.Header>
        <p>Wait for second..</p>
      </Message.Content>
    </Message>
  );
  const onSubmit = async (e) => {
    setLoading(true);
    setOnceClicked(true);
    e.preventDefault();
    const result = await axios.post(baseUrl + "/register", {
      ID: email,
      PW: password,
      CONFIRMPW: confirmPassword,
    });
    console.log(result.data);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoading(false);
    setResultData(result.data);
    console.log(result.data);
    setError(result.data.resultCode !== 200);
  };
  console.log(email, password);
  let ErrorMessage = "";
  if (onceClicked && !loading) {
    if (resultData)
      ErrorMessage = (
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
  return (
    <>
      <Header as="h2" icon color="orange" textAlign="center">
        <Icon name="puzzle" color="orange" />
        Register for Arduino Heat
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
            placeholder="Password ..."
            value={password}
            onChange={onChangePassword}
          />
        </Form.Field>
        <Form.Field>
          <label>password confirm</label>
          <input
            placeholder="Confirm password..."
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </Form.Field>

        <Button color="orange" icon type="submit" disabled={loading}>
          <Icon name="signup" />
          {"  "} Sign Up Test
        </Button>
      </Form>
      {!error && onceClicked && message}
      {onceClicked && !loading && ErrorMessage}
    </>
  );
};

export default Register;
