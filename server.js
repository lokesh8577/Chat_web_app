const http = require("http");
const express = require("express");
const path = require("path"); 
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const io = require("socket.io")(server);

let users = {};

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/chat.html", (req, res) => {
    res.sendFile(path.join(__dirname, "Chat.html"));
});

io.on("connection", (socket) => {
    console.log("New connection established");

    socket.on("new-user-joined", (username) => {
        users[socket.id] = username;
        socket.broadcast.emit("user-joined", username);
        io.emit("user-list", users); 
    });

    socket.on("disconnect", () => {
        const disconnectedUser = users[socket.id];
        if (disconnectedUser) {
            socket.broadcast.emit("user-disconnected", disconnectedUser);
            delete users[socket.id];
            io.emit("user-list", users);
        }
    });

    // Handle incoming messages
    socket.on("message", (data) => {
        socket.broadcast.emit("message", { user: data.user, msg: data.msg });
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
