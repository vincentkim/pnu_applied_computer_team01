#include "Arduino.h"
#include "WiFiEsp.h"
#include "MyWifi.h"

#ifndef HAVE_HWSERIAL1
#include "SoftwareSerial.h"
SoftwareSerial Serial1(19,18);
#endif

char ssid[] = "to";
char pass[] = "01036210358";
int status = WL_IDLE_STATUS;
int set=0;

char server[]="e2e3c2632add.ngrok.io";
String str2="";


WiFiEspClient client;

void Wifi_init(){
  Serial1.begin(9600);
  WiFi.init(&Serial1);

  if(WiFi.status() == WL_NO_SHIELD){
    Serial.println("WiFi shield not present");
    while(true);
  }

  while(status!=WL_CONNECTED){
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid,pass);
  }

  Serial.println("Connected to the network");
}

//식별용 MAC 주소 생성 함수
String MacAddress(){
  int i=0;
  byte mac[6];
  WiFi.macAddress(mac);
  char buf[20];
  sprintf(buf,"%02X:%02X:%02X:%02X:%02X:%02X",mac[5],mac[4],mac[3],mac[2],mac[1],mac[0]);
  String Mac_add = buf;
  return Mac_add;
}

void check_data(){
    while(client.available()){
    if(client.find("temp=")){
      char c=client.read();
      Serial.write(c);
      c=client.read();
      Serial.write(c);
    }
    }
}

int http_req(int temp,int humi)
{
  // 서버에 접속하기 위하여 HTTP 요청용 String을 생성
  String str="GET /v2/arduino/sendData?temp=";
  String Temp(temp);
  String Humi(humi);
  String Mac = MacAddress();
  str+=Temp;
  str+="&humi=";
  str+=Humi;
  str+="&mac=";
  str+=Mac;
  str+=" HTTP/1.1";
  //Serial.println(str);
  client.stop();
  if(client.connect(server, 80)){
    Serial.println("Connecting...");

    
    // 만들어진 HTTP 요청용 문장 서버로 전송
    client.println(str);
    client.println(F("Host: e2e3c2632add.ngrok.io"));
    client.println(F("Connection: close"));
    client.println();
     // client.println(client.read());
     
    }
    else{
      Serial.println("Connection failed");
    }
    }*/return 30;
  }
