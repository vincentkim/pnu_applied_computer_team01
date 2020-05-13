import React, { useState } from "react";

import { Grid, Message, Form, Button, Icon, Header } from "semantic-ui-react";
import axios from "axios";
import { baseUrl } from "../Constants/contants";
const ArduinoPost = () => {
  const [onceClicked, setOnceClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [humidity, setHumidity] = useState("");

  const onChangeHumidity = (e) => {
    setHumidity(e.target.value);
  };
  const onSumbitHumidity = async (e) => {
    console.log("Clicked");
    setOnceClicked(true);
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const result = await axios.post(baseUrl + "/arduino/data", {
      humidity,
    });
    console.log("send humidity", result);
    setHumidity("");
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
      <Header as="h2" icon color="orange" textAlign="center">
        <Icon name="send" color="orange" />
        Send Arduino Value for testing
      </Header>

      <Form
        style={{ maxWidth: 450, marginTop: 30 }}
        onSubmit={onSumbitHumidity}
      >
        <Form.Field>
          <label>Humidity...</label>
          <input
            placeholder="Humidity......"
            value={humidity}
            onChange={onChangeHumidity}
          />
        </Form.Field>

        <Button disabled={loading} color="orange" type="submit">
          <Icon name="sign-in" />
          Send Arduino Value
        </Button>
      </Form>
      {message}
    </>
  );
};

export default ArduinoPost;
