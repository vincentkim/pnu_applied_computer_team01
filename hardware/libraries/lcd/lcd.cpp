#include "Arduino.h"
#include "lcd.h"
#include <LiquidCrystal.h>
LiquidCrystal lcd(44,45,46,47,48,49);

void Lcd_init(){
  lcd.begin(16,2);
}

// LCD에 온습도, 희망온도를 display한다.
void Lcd_display(int set, int temp, int humi){
  String str1 ="Set temp = ";
  str1 += (String)set;
  str1+="C";
  lcd.print(str1);
  
  lcd.setCursor(0,1);

  String str2 = "T&H = ";
  str2 += (String) temp;
  str2 += "C, ";

  str2 += (String) humi;
  str2 += "%";
  lcd.print(str2);
  
  delay(2000);
  lcd.clear();
}
