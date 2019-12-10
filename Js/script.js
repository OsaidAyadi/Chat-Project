document.addEventListener("DOMContentLoaded", function(){
const userInput = document.getElementsByClassName('user-input')[0];
const sendMsg = document.getElementsByClassName('chat-btn-send')[0];
const chatBody = document.getElementsByClassName('chat-body')[0];
const viewProfile = document.getElementsByClassName('chat-left-side')[0];
const hideProfile = document.getElementsByClassName('profile-exit')[0];
const profile = document.getElementsByClassName('profile-side')[0];
const chatRow = document.getElementsByClassName('active-chat')[0];
const chatSide = document.getElementsByClassName('chat-side')[0];
const friendSide = document.getElementsByClassName('friend-side')[0];
const pageHeader = document.getElementsByClassName('header')[0];
const sideBar = document.getElementsByClassName('sidebar')[0];

    //This function is for open chat side only !
    function showChatSide() {
        if (window.innerWidth <= 990){
        friendSide.classList.add('hide');
        sideBar.classList.add('hide');
        pageHeader.classList.add('hide');
        chatSide.classList.add('active');
    }
    }

    //This eventListener for add message to Chat-Body .
    sendMsg.addEventListener('click',()=>{
        let msgDiv = document.createElement("div");
        msgDiv.classList.add("message-send");
        let paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(userInput.value));
        msgDiv.appendChild(paragraph);
        chatBody.appendChild(msgDiv);
        chatBody.scrollTo(0,chatBody.scrollHeight);
        userInput.value='';
    })

    //View an hide profile in mobile case and view user profile in desktop screen size case.
    viewProfile.addEventListener('click',(e)=>{
        profile.classList.add('active');
        if (viewProfile.offsetWidth>230){
        if(e.clientX <= 23) {
            chatSide.classList.remove('active');
            friendSide.classList.remove('hide');
            pageHeader.classList.remove('hide');
        } else { 
            chatSide.classList.remove('active');
            profile.classList.add('open');
        }
        hideProfile.addEventListener('click',()=>{
            profile.classList.remove('open');
            showChatSide();
        })
    }
    })

    //Hide user profile in desktop screen size case.
    hideProfile.addEventListener('click',()=>{
        profile.classList.remove('active');
    })

    //For open chat side full width .
    chatRow.addEventListener('click',()=>{
        showChatSide();
    })

});