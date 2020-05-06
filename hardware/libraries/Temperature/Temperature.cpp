#include "Arduino.h"
#include <DHT11.h>
#include "Temperature.h"

//DHT11 센서 init
DHT11 dht11(A1);

// 가변저항 init
void Temp_init(){
  pinMode(A0,INPUT);
}

//희망온도를 설정하기 위해 가변 저항으로부터 값을 읽어온다.
int Set_measure(){
  int Set = analogRead(A0);
  return map(Set,0,1023,0,30);
}

//DHT11 센서가 2개의 값을 동시에 받아오기 때문에 String으로 받아서 분리하는 방식을 채택했다.
String Sensor_measure(){
  int i;
  float humi, temp;
  String str; // 온도 값과 습도값을 str에 집어넣는다.
  if((i = dht11.read(humi,temp)) == 0 ){
    str += (String)((int)temp);
    str +=",";
    str += (String)((int)humi);
    return str;
  }
}  
  
// 2개의 값이 연결된 String을 분할하여 온도값을 읽어온다.
int Temp_measure(String str){
  String temp = str.substring(0, str.indexOf(","));
  return temp.toint();
}

//2개의 값이 연결된 String을 분할하여 습도값을 읽어온다.
int Humi_measure(String str){
  String humi = str.substring( str.indexOf(",")+1, str.length());
  return humi.toint();
}



