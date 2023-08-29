const photo = document.querySelector("#child")
const like = document.querySelector('i')

let likeCount = 0

photo.addEventListener("dblclick", () => {
    like.style.transform = 'translate(-50%,-50%) scale(1.3)';
    like.style.opacity = '0.9';
    setTimeout(() => {
        like.style.transform = 'translate(-50%,-50%) scale(1.2)';
    }, 500)

    setTimeout(() => {
        like.style.opacity = '0';

    }, 1200)

    setTimeout(() => {
        like.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 1500)
})