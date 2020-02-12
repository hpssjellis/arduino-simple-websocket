
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


