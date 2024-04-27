const inputCnt = document.querySelector("#text");
const numbers = document.querySelector("#char-count")


inputCnt.addEventListener("input", (event) => {
    const count = event.target.value.length
    numbers.innerText = `${count}/100`
    if(count>100){
        inputCnt.style.borderColor = "red"
        // document.body.style.backgroundColor = "red"
    }else{
        inputCnt.style.borderColor = "deepskyblue"
        // document.body.style.backgroundColor = "deepskyblue"
    }
} )

