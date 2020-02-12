# arduino-simple-websocket
How to connect an Arduino to a node js websocket for fast webpage to Arduino to webpage communication.


Note: My main Arduino Robotics Teaching site is at https://github.com/hpssjellis/arduino-high-school-robotics-course




To load on gitpod.io click this url

https://gitpod.io/#github.com/hpssjellis/arduino-simple-websocket

Using the .gitpod.yml file things hould auto install on gitpod.


If things aren't working then degrade the package.json file to:


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





By Jeremy Ellis

Canadian High School Robotics Teacher

Maker of http://www.rocksetta.com

Twitter https://twitter.com/rocksetta

Use at your own risk!

