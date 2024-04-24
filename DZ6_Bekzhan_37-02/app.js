const cnt = document.body.querySelectorAll(".cnt");
const button = document.body.querySelector("#button");

function getRandomInt() {
    const min = 1;
    const max = 99;
    return String(Math.floor(Math.random() * (max - min + 1)) + min).padStart(2, "0");
}

button.onclick = () => {
    for (let i = 0; i<cnt.length; i++) {
        cnt[i].innerText = getRandomInt();
    }
}