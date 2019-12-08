document.addEventListener("DOMContentLoaded", function(){
const friendList = document.getElementsByClassName('second-col')[0];

    friendList.addEventListener('mouseover',()=>{
        friendList.classList.add('scroll');
    })

    friendList.addEventListener('mouseleave',()=>{
        setTimeout(() => {
            friendList.classList.remove('scroll');
        }, 1000);
    })


});