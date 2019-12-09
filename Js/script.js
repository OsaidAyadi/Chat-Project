document.addEventListener("DOMContentLoaded", function(){
const friendList = document.getElementsByClassName('friend-side')[0];
const userInput = document.getElementsByClassName('user-input')[0];
const sendMsg = document.getElementsByClassName('chat-btn-send')[0];
const chatBody = document.getElementsByClassName('chat-body')[0];
const viewProfile = document.getElementsByClassName('chat-left-side')[0];
const hideProfile = document.getElementsByClassName('profile-exit')[0];
const profile = document.getElementsByClassName('profile-side')[0];

    friendList.addEventListener('mouseover',()=>{
        friendList.classList.add('scroll');
    })

    friendList.addEventListener('mouseleave',()=>{
        setTimeout(() => {
            friendList.classList.remove('scroll');
        }, 1000);
    })

    sendMsg.addEventListener('click',()=>{
        let msgDiv = document.createElement("div");
        msgDiv.classList.add("message-send");
        let paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(userInput.value));
        msgDiv.appendChild(paragraph);
        chatBody.appendChild(msgDiv);
        chatBody.scrollTo(0,chatBody.scrollHeight);
    })

    viewProfile.addEventListener('click',()=>{
        profile.classList.add('active');
    })
    hideProfile.addEventListener('click',()=>{
        profile.classList.remove('active');
    })


});