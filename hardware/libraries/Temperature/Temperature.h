#ifndef temp_h
#define temp_h

//가변 저항의 init.
void Temp_init();

// String으로부터 온도값을 읽어온다.
int Temp_measure(String str);

// String으로부터 습도값을 읽어온다. 
int Humi_measere(String str);

//DHT11 센서로부터 온도값, 습도값을 String형태로 받아온다.
String Set_measure();

//기기 자체의 세팅 온도를 설정한다.
String Sensor_measure();

#endif
