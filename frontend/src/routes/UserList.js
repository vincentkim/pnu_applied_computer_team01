import React from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "../Pages/SidePanel";
import User from "../Pages/User";

const UserList = (props) => {
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
              
              <User /> 
            </Grid.Column> 
          </Grid.Row> 
        </Grid>
      </div>
    </>
  );
};
export default UserList;
