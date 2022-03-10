const btn = document.querySelector("#btn");
const gameForm = document.querySelector("form");
const answerList = document.querySelector("ul");
const answerPart = document.querySelector("#answer");

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");

const randomList = [];

function focus_next(current, next) {
    if (current.value.length==1) {
        next.focus();
        return;
    }
}

function makeRandomList() {
    let cnt = 0;
    let n = 0;
    
    while(cnt < 4){
        if(cnt == 0) {
            n = Math.floor(Math.random() * 9) + 1;
        } else {
            n = Math.floor(Math.random() * 10);
        }
        if(!sameNum(n)) {
            randomList.push(n);
            cnt++;
        }
    }
}

function sameNum(n) {
    for(let i = 0; i < randomList.length; i++){
        if(n === randomList[i]) {
            return true;
        }
    }
    return false;
}

function handleBtn(event) {
    event.preventDefault();

    const myList = [];

    let divList = document.createElement("div");
    divList.classList = 'divList';

    myList.push(parseInt(num1.value));
    myList.push(parseInt(num2.value));
    myList.push(parseInt(num3.value));
    myList.push(parseInt(num4.value));

    for(let i = 0; i < 4; i++) {
        let divNode = document.createElement("div");
        divNode.classList = 'divNode';
        divNode.innerText = myList[i];
        if(randomList.includes(myList[i])) {
            // divNode.style.backgroundColor = "#dba617";
            divNode.style.backgroundColor = "#FCBB42";
        }
        if(myList[i] == randomList[i]) {
            // divNode.style.backgroundColor = "#00a32a";
            divNode.style.backgroundColor = "#8CC152";
        }
        divList.appendChild(divNode);
    }
    answerPart.prepend(divList);  

    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";

    num1.focus();
}

makeRandomList();
gameForm.addEventListener("submit", handleBtn);

