# Socket.IO chat

This is a starter project for a Socket.IO chat. You only need to work in server.ts.

## Getting Started :rocket:

* Clone this repository: `git clone https://github.com/konrab-ima/simple-socket-io-chat.git`.
* Run `npm install` from the project root.
* Run `npm run start` in a terminal from the project root.

## Tasks :memo:

Please add the following functionality:

1. React to **new connections**.
2. Send **incoming messages** to all clients.
3. When a client is connecting, send a **broadcast** message to all connected clients (hint: you can try it out using
   multiple tabs/browser windows).
4. **Advanced**: Below the input field there are some **rooms** (room A and room B). Clients who chose General, should
   only receive broadcasts and messages from other clients in general. Clients in room A should receive messages from
   general, room A and broadcasts. Clients in room B should receive messages from general, room B and broadcasts.
