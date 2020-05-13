import React from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "../Pages/SidePanel";
import ArduinoPost from "../Pages/ArduinoPost";
const PostArdData = (props) => {
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
              <ArduinoPost />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};
export default PostArdData;
