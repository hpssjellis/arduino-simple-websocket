# arduino-simple-websocket
How to connect an Arduino to a node js websocket for fast webpage to Arduino to webpage communication.

.

To load on gitpod.io click this url (Gitpod needs you to OK Github or Gitlab for authentification)

https://gitpod.io/#github.com/hpssjellis/arduino-simple-websocket

It will auto install everything.
Load the webpage in a full browser window so you can copy the URL without the https:// or the trailing "/"

Copy that URL into your socket.ino file and flash it to your Arduino Nano 33 IoT

Open the serial monitor and wate for the Wifi to connect and for it to connect to the websocket

Click the A and B buttons on the web page and see the built in LED light on the Arduino.

You now have high speed control of your Arduino.

------------------------------

### Note: The main Arduino High School Robotics site is at:  https://github.com/hpssjellis/arduino-high-school-robotics-course



Good javascript testing link

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift



research new handshake

```
GET <target> HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: com.xxx.service.v1
Sec-WebSocket-Version: 13
```



some good stuff at

https://ably.com/blog/web-app-websockets-nodejs


