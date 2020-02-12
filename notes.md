Present testing of the github on gitpod is showing that this package.json configuration works

```
  "dependencies": {
    "express": "4.17.1",
    "ws": "0.8.0"
  }

```

Seems that permessage-deflate extension added in version 0.6.0 and disabled in 0.6.1 is possibly th emain problem at the moment.

https://github.com/websockets/ws/pull/409
















```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

```


Additionally, the server can decide on extension/subprotocol requests here; see Miscellaneous for details. The Sec-WebSocket-Accept header is important in that the server must derive it from the Sec-WebSocket-Key that the client sent to it. To get it, concatenate the client's Sec-WebSocket-Key and the string "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" together (it's a "magic string"), take the SHA-1 hash of the result, and return the base64 encoding of that hash.


try it on http://www.sha1-online.com/

http://www.utilities-online.info/base64/#.XkNfg2hKiUl


I am not getting sensible values.

Note: This seemingly overcomplicated process exists so that it's obvious to the client whether or not the server supports WebSockets. This is important because security issues might arise if the server accepts a WebSockets connection but interprets the data as a HTTP request.

So if the Key was "dGhlIHNhbXBsZSBub25jZQ==", the Sec-WebSocket-Accept header's value is "s3pPLMBiTxaQ9kYGzzhZRbK+xOo=". Once the server sends these headers, the handshake is complete and you can start swapping data!




WS versions


```
7.2.1
2 months ago
7.2.0
4 months ago
7.1.2
6 months ago
7.1.1
7 months ago
7.1.0
7 months ago
7.0.1
8 months ago
7.0.0
9 months ago
6.2.1
a year ago
6.2.0
a year ago
6.1.4
a year ago
6.1.3
a year ago
6.1.2
a year ago
6.1.1
a year ago
6.1.0
a year ago
6.0.0
2 years ago
5.2.2
2 years ago
5.2.1
2 years ago
5.2.0
2 years ago
5.1.1
2 years ago
5.1.0
2 years ago
5.0.0
2 years ago
4.1.0
2 years ago
4.0.0
2 years ago
3.3.3
2 years ago
3.3.2
2 years ago
3.3.1
2 years ago
1.1.5
2 years ago
3.3.0
2 years ago
3.2.0
2 years ago
3.1.0
3 years ago
3.0.0
3 years ago
2.3.1
3 years ago
2.3.0
3 years ago
2.2.3
3 years ago
2.2.2
3 years ago
2.2.1
3 years ago
1.1.4
3 years ago
1.1.3
3 years ago
2.2.0
3 years ago
2.1.0
3 years ago
1.1.2
3 years ago
2.0.3
3 years ago
2.0.2
3 years ago
2.0.1
3 years ago
2.0.0
3 years ago
2.0.0-beta.2
3 years ago
2.0.0-beta.1
3 years ago
2.0.0-beta.0
3 years ago
1.1.1
4 years ago
1.1.0
4 years ago
1.0.1
4 years ago
1.0.0
4 years ago
0.8.1
4 years ago
0.8.0
4 years ago
0.7.2
5 years ago
0.7.1
5 years ago
0.7.0
5 years ago
0.6.5
5 years ago
0.6.4
5 years ago

```
