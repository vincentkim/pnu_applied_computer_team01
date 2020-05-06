#ifndef lcd_h
#define lcd_h
#include <LiquidCrystal.h>


void Lcd_init();
void Lcd_display(int set,int temp,int humi);
#endif
