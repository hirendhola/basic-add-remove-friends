const isfriend = document.querySelector("span")
const addFriend = document.querySelector('#add')
const removefriend = document.querySelector('#remove')
let bool = true;
addFriend.addEventListener('click', ()=>{
    if(bool){
    isfriend.innerHTML = "Friends"
    isfriend.style.color = "green"
    addFriend.innerHTML = "Friends"

    bool = false;

    }else{
    isfriend.innerHTML = "Stranger"
    isfriend.style.color = "red"
    addFriend.innerHTML = "Add friend"

    bool = true;

    }
})
