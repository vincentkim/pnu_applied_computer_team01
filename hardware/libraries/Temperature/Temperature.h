#ifndef temp_h
#define temp_h

void Temp_init();
//가변 저항의 init.
int Temp_measure();
//DHT11 센서로 온도값을 받아온다.
int humi_measere();
//DHT11 센서로 습도값을 받아온다.
int Set_measure();
//기기 자체의 세팅 온도를 설정한다.


#endif
