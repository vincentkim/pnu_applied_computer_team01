import React from "react";
import { Grid } from "semantic-ui-react";
import Login from "../Pages/Login";
import SidePanel from "../Pages/SidePanel";

const LoginRoute = (props) => {
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
};
export default LoginRoute;
