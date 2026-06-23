# sistema_chat — Real-Time Chat Engine 💬

A lightweight, real-time chat application engine built with Node.js and JavaScript, utilizing WebSockets for instantaneous bi-directional communication. This project was developed as a hands-on learning environment to master asynchronous event-driven architectures and scalable backend design patterns.

---

## 🛠️ Software Architecture & Directory Structure

The backend follows a rigid modular architecture to ensure separation of concerns, decoupling transport protocols, business rules, and state data.

```text
├── controllers/          # Request payload handling and orchestration
│   ├── channelController.js
│   ├── chatController.js
│   └── controller.js
├── models/               # Data layer abstractions and entity schemas
│   ├── channel.js
│   └── message.js
├── routes/               # Architectural API routing entry points
│   ├── groups/
│   │   ├── channelRoutes.js
│   │   └── chatRoutes.js
│   └── api.js
├── services/             # Isolated core business logic layer
│   ├── channelService.js
│   └── chatService.js
├── server.js             # HTTP REST API server initialization
└── serverWebsocket.js    # Socket.io connection and event orchestration
```

## 🚀 Getting Started & Local Deployment
1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your local host system.

2. Installation
Clone the repository and install the development and runtime dependencies:
```bash
npm install
```

3. Running the Application
Start the local server configurations:
```bash
npm start
```
The application bootstrapper will initialize, exposing both the REST API endpoints and the live WebSocket gateway.

## 🔧 Core Tech Stack
* Runtime Environment: Node.js (JavaScript)
* API Framework: Express
* WebSocket Engine: Socket.io
