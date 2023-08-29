const isfriend = document.querySelector("span")
const addFriend = document.querySelector('#add')
const removefriend = document.querySelector('#remove')

addFriend.addEventListener('click', ()=>{
    isfriend.innerHTML = "Friends"
    isfriend.style.color = "green"
    addFriend.innerHTML = "Friends"
})

removefriend.addEventListener('click', ()=>{
    isfriend.innerHTML = "Stranger"
    isfriend.style.color = "red"
    addFriend.innerHTML = "Add Friend"
})