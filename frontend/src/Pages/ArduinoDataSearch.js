import React, { useState, useEffect } from "react";
import { Grid, Card, Input, Button, Header } from "semantic-ui-react";
import { baseUrl } from "../Constants/contants";
import axios from "axios";

// ArduinoDataSearch 아두이노 데이터 검색
const ArduinoDataSearch = (props) => {
  const [datas, setDatas] = useState([]);
  const [arduinoId, setArduinoId] = useState("");
  const onChange = (e) => {
    setArduinoId(e.target.value);
  };
  const onClick = async (e) => {
    setDatas([]);
    console.log("Hello");
    e.preventDefault();
    const data = await axios.get(baseUrl + "/arduino/data/" + arduinoId);
    console.log("btn Clicked", data);
    setDatas(data.data.dataList);
    console.log(datas);
    setArduinoId("");
  };

  return (
    <>
      <Grid columns="equal">
        <Grid.Row>
          <Header
            as="h2"
            content="Sample Data... ID는 1,2에 데이터 저장했습니다."
            color="red"
            inverted
          />
        </Grid.Row>
        <Grid.Row>
          <Input
            value={arduinoId}
            onChange={onChange}
            label="Arduino Id"
            placeholder="Place Arduino Id..sada."
          />
          <Button icon="search" size="medium" onClick={onClick} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group>
              {datas &&
                datas.length > 0 &&
                datas.map((data) => (

                  <Card color="orange">
                    <Card.Content>
                      <Card.Header>Humidity : {data.humidity}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default ArduinoDataSearch; 
