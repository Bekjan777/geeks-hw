const cnt = document.body.querySelector("#cnt");
const button = document.body.querySelector("#button");

function getRandomInt() {
    const min = 1;
    const max = 99;
    return String(Math.floor(Math.random() * (max - min + 1)) + min).padStart(2, "0");
}

button.onclick = () => {
    cnt.innerText = getRandomInt() + getRandomInt() + getRandomInt();
}