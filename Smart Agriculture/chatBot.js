const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chat");

let userMessage;
const API_KEY = "sk-proj-LQBg3Nqdyiz0JvbMEEtyT3BlbkFJUym6luLH9rrud8xsCSfH";

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-4",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user",
                    "content": userMessage
                }
            ]
        })
    };

    fetch(API_URL, requestOptions)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            if (data.choices && data.choices.length > 0) {
                messageElement.textContent = data.choices[0].message.content;
            } else {
                messageElement.textContent = "No response from server.";
                console.error("Unexpected response format:", data);
            }
        })
        .catch((error) => {
            messageElement.textContent = "Oops, something went wrong. Please try again.";
            console.error("Error:", error);
        });
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chatli", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";

    setTimeout(() => {
        const incomingChatLi = createChatLi("thinking....", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    }, 600);
};

sendChatBtn.addEventListener("click", handleChat);