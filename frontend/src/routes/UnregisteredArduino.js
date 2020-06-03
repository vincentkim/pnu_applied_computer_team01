import React, { useState, useEffect } from "react";
import { Grid, Card } from "semantic-ui-react";
import SidePanel from "../Pages/SidePanel";
import Register from "../Pages/Register";
import UnregistereArdList from "../Pages/UnregistereArdList";

const UnregisteredArduino = (props) => {
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
              <UnregistereArdList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};
export default UnregisteredArduino;
