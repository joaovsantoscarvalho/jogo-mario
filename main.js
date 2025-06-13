const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remover("jump");
    }
    ,500);
}

const loop =setInterval(()=>{
const pipePosition = pipe.offsetleft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {
        pipe.Style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.Style.animation = "none";
        mario.Style.left = `${pipePosition}px`;
    }
})
document.addEventListener("keydown", jump);