const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remover("jump");
    }
    ,500);
}

document.addEventListener("keydown", jump);