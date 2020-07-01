#ifndef wifi_h
#define wifi_h

void check_data();

// 아두이노 식별용 MAC Add 확인 함수
String MacAddress();

// 와이파이 모듈 시작
void Wifi_init();

// 서버에 HTTP 요청을 하여 현재 온도,습도 전송 및 설정 온도 수신
int http_req(int temp,int humi);

#endif
