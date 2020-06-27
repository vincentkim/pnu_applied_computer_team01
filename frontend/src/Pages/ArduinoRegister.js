import React, { useState } from "react";

import { Grid, Message, Form, Button, Icon, Header } from "semantic-ui-react";
import axios from "axios";
import { baseUrl } from "../Constants/contants";

// 아두이노 등록
const ArduinoRegister = () => {
  const [onceClicked, setOnceClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arduinoId, setArduinoId] = useState("");

  const onChangeArduinoId = (e) => {
    setArduinoId(e.target.value);
  };
  const onSumbit = async (e) => {
    console.log("Clicked");
    setOnceClicked(true);
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const arduinoIdTest = "1";
    const result = await axios.post(baseUrl + "/arduino/register/", {
      arduino_Id: arduinoId,
    });
    setArduinoId("");
  };
  let message = "";
  if (onceClicked && loading) {
    message = (
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Your Requset is processing</Message.Header>
          <p>Wait for second..</p>
        </Message.Content>
      </Message>
    );
  } else if (onceClicked && !loading) {
    message = (
      <Message icon positive>
        <Icon name="circle outline" />
        <Message.Content>
          <Message.Header>Success</Message.Header>
          <p>Saved your data</p>
        </Message.Content>
      </Message>
    );
  }
  return (
    <>
      <Header as="h2" icon color="violet" textAlign="center">
        <Icon name="code" color="violet" />
        Register Arduino
      </Header>

      <Form style={{ maxWidth: 450, marginTop: 30 }} onSubmit={onSumbit}>
        <Form.Field>
          <label>Arduino Id ...</label>
          <input
            placeholder="Arduino Id......"
            value={arduinoId}
            onChange={onChangeArduinoId}
          />
        </Form.Field>
        <Button disabled={loading} color="violet" type="submit">
          <Icon name="sign-in" />
          Register Arduino Id
        </Button>
      </Form>
      {message}
    </>
  );
};

export default ArduinoRegister;
