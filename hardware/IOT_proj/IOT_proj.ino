#include "lcd.h"
#include "Temperature.h"

int relay=52;
int Humi, Temp;
String str;

//초기 init
void setup(){
  Serial.begin(9600);
  pinMode(relay,OUTPUT);
  Lcd_init();
  Temp_init();
}

void loop(){
  //현재 멀티탭 제어를 확인을 위하여 값의 변경이 쉬운 가변저항을 이용하여 릴레이 모듈 확인
  //추후에 바꿀 예정
  int Set= Set_measure();
  //가변저항 값이 20미만이면 릴레이모듈이 작동하여 멀티탭의 전원이 켜짐
  if(Set<20){
    digitalWrite(relay,HIGH);
  }
  //가변저항 값이 20이상이면 릴레이모듈이 꺼지며 멀티탭의 전원이 꺼짐
  else{
    digitalWrite(relay,LOW);
  }
  
  str = Sensor_measure();
  Temp = Temp_measure(str); 
  Humi = humi_measure(str);
  Lcd_display(Set, Temp, Humi);
}
