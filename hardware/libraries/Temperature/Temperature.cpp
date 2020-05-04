#include "Arduino.h"
#include "Temperature.h"


void Temp_init(){
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
}
int Set_measure(){
  int Set = analogRead(A0);
  return map(Set,0,1023,0,30);
}
int Temp_measure(){
  int fire = analogRead(A1);
  float voltage = fire*5.0/1024.0;
  return voltage*100;
}

