import React from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "../Pages/SidePanel";
import Register from "../Pages/Register";

const RegisterRoute = (props) => {
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
              <Register />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};
export default RegisterRoute;
