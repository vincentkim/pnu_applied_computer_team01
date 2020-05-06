#include "Arduino.h"
#include <DHT11.h>
#include "Temperature.h"

DHT11 dht11(A1);

void Temp_init(){
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
}

int Set_measure(){
  int Set = analogRead(A0);
  return map(Set,0,1023,0,30);
}

int Temp_measure(){
  int i;
  float temp,humi;
  if((i = dht11.read(humi,temp))==0){
    return temp;
  }
}

int humi_measure(){
  int i;
  float temp,humi;
  if((i = dht11.read(humi,temp))==0){
    return humi;
  }
}

