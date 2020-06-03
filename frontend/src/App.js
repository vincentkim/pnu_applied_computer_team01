import React, { useState } from "react";
import logo from "./logo.svg"; 
import "./App.css"; 
import { Form, Grid, Button, Checkbox, Segment } from "semantic-ui-react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ArduinoPost from "./Pages/ArduinoPost";
import Dummy from "./Pages/Dummy";
import SidePanel from "./Pages/SidePanel";

function App() {
  return (
    <>
      <div className="app">
        <SidePanel />
        <Grid
          stackable
          celled
          verticalAlign="middle"
          container
          centered
          columns={2}
          divided
          textAlign="center"
        >
          <Grid.Row>
            <Grid.Column>
              <Login />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default App;
