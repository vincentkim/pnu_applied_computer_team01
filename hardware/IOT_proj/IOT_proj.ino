#include "lcd.h"
#include "Temperature.h"

int relay=52;

void setup(){
  Serial.begin(9600);
  pinMode(relay,OUTPUT);
  Lcd_init();
  Temp_init();
}
void loop(){
  int Set= Set_measure();
  if(Set<20){
    digitalWrite(relay,HIGH);
  }
  else{
    digitalWrite(relay,LOW);
  }
  int Temp = Temp_measure();
  Lcd_display(Set,Temp);
}
