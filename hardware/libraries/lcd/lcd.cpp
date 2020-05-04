#include "Arduino.h"
#include "lcd.h"
#include <LiquidCrystal.h>
LiquidCrystal lcd(44,45,46,47,48,49);

void Lcd_init(){
  lcd.begin(16,2);
}
void Lcd_display(int set, int temp){
  lcd.print("set temp = ");
  lcd.setCursor(0,1);
  lcd.print("temp = ");
  lcd.setCursor(10,0);
  lcd.print(set);
  lcd.setCursor(7,1);
  lcd.print(temp);
  delay(2000);
  lcd.clear();
}
