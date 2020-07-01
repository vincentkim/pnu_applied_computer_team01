#include "lcd.h"
#include "Temperature.h"
#include "MyWifi.h"
#include "WiFiEsp.h"




//WiFiEspClient client;

unsigned long lastConnectionTime = 0;

// 30초마다 HTTP 요청
const unsigned long postingInterval = 30000L;
int Set;
int relay=52;
int Humi,Temp;
int pre_Humi,pre_Temp;
String str;
String Mac_add;
void setup(){
  Serial.begin(9600);
  pinMode(relay,OUTPUT);
  Wifi_init();
  Lcd_init();
  Temp_init();
  str = Sensor_measure();
  pre_Temp = Temp_measure(str);
  pre_Humi = Humi_measure(str);
  Set= 21;
  Lcd_display(Set,pre_Temp,pre_Humi);
  //Set= Set_measure();
}
void loop(){

  //현재 상태를 나타내기 위해 센서로부터 값을 읽어온다.
  str = Sensor_measure();
  Temp = Temp_measure(str);
  Humi = Humi_measure(str);
  Set=check_data();
  if(millis()-lastConnectionTime>postingInterval){
  http_req(Temp,Humi);
  //Set=27;
  lastConnectionTime=millis();
  }
  // 수신받은 설정 온도보다 낮으면 릴레이 모듈 작동하여 멀티탭 전원 켜짐
  if(Temp<Set){
    digitalWrite(relay,HIGH);
  }
  //수신받은 설정 온도에 도달하면 릴레이 모듈이 꺼지며 멀티탭 전원 꺼짐
  else{
    digitalWrite(relay,LOW);
  }
  
  Lcd_display(Set,Temp,Humi);
  
}
