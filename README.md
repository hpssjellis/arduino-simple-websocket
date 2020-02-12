# arduino-simple-websocket
How to connect an Arduino to a node js websocket for fast webpage to aRDUINO COMMUNICATION.


To load on gitpod.io click this url

https://gitpod.io/#github.com/hpssjellis/arduino-simple-websocket

Then degrade the package.json file to:


```
  "dependencies": {
    "express": "4.14.0",
    "ws": "0.4.32"
   }
```

Then type:

```
npm install
node index.js

```
Find the URL of your running page and copy it to the socket.ino and run your arduino

Click the A button to light the LED the B button to turn it off.






The basic files should eventually be

index.js    loads the nodejs program to activate the socket. I have had it work using http://repl.it but want to get it working with Gitpod

index.html is loaded by index.js


socket.ino is loaded on your arduino. It will need the URL from the above index.html file when it is active.




