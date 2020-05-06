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

//DHT11 센서로부터 온도를 읽어온다.
int Temp_measure(){
  int i;
  float temp,humi;
  if((i = dht11.read(humi,temp))==0){
    return temp;
  }
}

//DHT11 센서로부터 습도를 읽어온다.
int humi_measure(){
  int i;
  float temp,humi;
  if((i = dht11.read(humi,temp))==0){
    return humi;
  }
}



