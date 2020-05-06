import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form, Button, Checkbox } from "semantic-ui-react";
import axios from "axios";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [humidity, setHumidity] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeHumidity = (e) => {
    setHumidity(e.target.value);
  };
  const onSumbitHumidity = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:4000/arduino/data", {
      humidity,
    });
    console.log("send humidity", result);
    setHumidity("");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:4000/phone/login", {
      ID: email,
      PW: password,
    });
    console.log(result.data);
    setEmail("");
    setPassword("");
  };
  console.log(email, password);
  return (
    <div className="App">
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

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
