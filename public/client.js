const socket = io();

var chats = document.querySelector(".chat");
var users_list = document.querySelector(".user-list");
var user_count = document.querySelector(".users-count");
var msg_send = document.querySelector("#user-send");
var user_msg = document.querySelector("#user-msg");

function getUsernameFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('username');
}

const username = getUsernameFromURL();
if (username) {
    socket.emit("new-user-joined", username); 

   
    userJoinLeft("You", "joined");
} else {
    alert("No username provided. Redirecting to join page...");
    window.location.href = "index.html";
}
socket.on("user-joined", (newUser) => {
    if (newUser !== username) {
        userJoinLeft(newUser, "joined");
    }
});

function userJoinLeft(name, status) {
    let div = document.createElement("div");
    div.classList.add("user-join");
    let content = `<p><b>${name}</b> has ${status} the chat</p>`;
    div.innerHTML = content;
    chats.appendChild(div);
    chats.scrollTop = chats.scrollHeight;
}

socket.on("user-disconnected", (user) => {
    userJoinLeft(user, "left");
});

socket.on("user-list", (users) => {
    users_list.innerHTML = "";
    let users_arr = Object.values(users);
    for (let i = 0; i < users_arr.length; i++) {
        let p = document.createElement("p");
        p.innerText = users_arr[i];
        users_list.appendChild(p);
    }
    user_count.innerText = users_arr.length;
});

msg_send.addEventListener("click", () => {
    let data = {
        user: username,
        msg: user_msg.value,
    };
    if (user_msg.value.trim() !== "") {
        appendMessage(data, "outgoing");
        socket.emit("message", data);
        user_msg.value = "";
    }
});

function appendMessage(data, status) {
    let div = document.createElement("div");
    div.classList.add("message", status);
    let content = `<h5>${data.user}</h5>
    <p>${data.msg}</p>`;
    div.innerHTML = content;
    chats.appendChild(div);
    chats.scrollTop = chats.scrollHeight;
}

socket.on("message", (data) => {
    appendMessage(data, "incoming");
});
