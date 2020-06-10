import React, { useState, useEffect } from "react";
import { Card, Segment, Grid, Button, Header } from "semantic-ui-react";
import { baseUrl } from "../Constants/contants";
import axios from "axios";

const UnregistereArdList = (props) => {

  const [ardList, setArdList] = useState([]); 
  const [userList, setUserList] = useState([]); 
  const [currentArduino, setCurrentArduino] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); 
  useEffect(() => {

    const fetchData = async () => {
      const ardList = await axios.get(baseUrl + "/arduino/unregistered");
      const userList = await axios.get(baseUrl + "/user/");
      if (ardList && ardList.data) {
        console.log("ardlist", ardList.data.ardList);
        setArdList(ardList.data.ardList);
        // setArdList(ardList.data.ardList);
      }
      if (userList && userList.data) {
        setUserList(userList.data.userList);
        //setUserList(userList.data.userList);
      }
    };
    fetchData();
  }, []);
  const connect = async (e) => {
    // console.log("connect btn clicked");
    if (!currentArduino && !currentUser) {
      // console.log("select 해야지");
      return;
    }
    const result = await axios.post(baseUrl + "/phone/connect", {
      arduino_id: currentArduino,
      user_id: currentUser,
    });
    console.log("result", result);
  };
  return (
    <>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={7}>
            <Card.Group>
              <Card color="green">
                <Card.Content>
                  <Card.Header>Unregistered Arduino Data</Card.Header>
                </Card.Content>
              </Card>

              {ardList &&
                ardList.length > 0 &&
                ardList.map((arduino) => (
                  <Card
                    color={currentArduino === arduino.ID ? "red" : "green"}
                    onClick={() => setCurrentArduino(arduino.ID)}
                  >
                    <Card.Content>
                      <Card.Header>Arduino Id : {arduino.ID}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={7}>
            <Card.Group vi>
              <Card color="orange">
                <Card.Content>
                  <Card.Header>All User Data</Card.Header>
                </Card.Content>
              </Card>
              {userList &&
                userList.length > 0 &&
                userList.map((user) => (
                  <Card
                    color={currentUser === user.ID ? "blue" : "orange"}
                    onClick={() => setCurrentUser(user.ID)}
                  >
                    <Card.Content>
                      <Card.Header>User Id : {user.ID}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
            </Card.Group>
          </Grid.Column>
          <Header
            as="a2"
            content="아두이노 ==> 유저 계정 연결 카드를 클릭하세요"
            inverted
            color="red"
          />
          <Grid.Column width={4}>
            <Button
              onClick={connect}
              content=" 개발 해야함(Connect)"
              icon="add"
              color="violet"
              size="massive"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default UnregistereArdList;
