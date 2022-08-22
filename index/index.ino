void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}
 int a = 0;
void loop() {
  // put your main code here, to run repeatedly:
  
Serial.println(a);
delay(1000);
  a = a+1;
  if(a >=100){
    a = 0;
  }
}
