const btn = document.querySelector("#btn");
const gameForm = document.querySelector("form");
const answerList = document.querySelector("ul");
const answerPart = document.querySelector("#answer");

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");

const randomList = [];

const BALL = "#FCBB42";
const STRIKE = "#8CC152";

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
        if(cnt === 0) {
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

function closePopup() {
	const popup = document.querySelector('#popup');
    popup.classList.add('hide');
    location.reload();
}

function showPopup() {
	const popup = document.querySelector('#popup');

  	popup.classList.remove('has-filter');

  
  popup.classList.remove('hide');
}

function makeMyList() {
    let myList = [];
    myList.push(parseInt(num1.value));
    myList.push(parseInt(num2.value));
    myList.push(parseInt(num3.value));
    myList.push(parseInt(num4.value));
    return myList;
}

function handleBtn(event) {
    event.preventDefault();

    let cnt = 0;
    const myList = makeMyList();

    let divList = document.createElement("div");
    divList.classList = 'divList';

    for(let i = 0; i < 4; i++) {
        let divNode = document.createElement("div");
        divNode.classList = 'divNode';
        divNode.innerText = myList[i];
        if(randomList.includes(myList[i])) {
            divNode.style.backgroundColor = BALL;
        }
        if(myList[i] === randomList[i]) {
            divNode.style.backgroundColor = STRIKE;
            cnt++;
        }
        divList.appendChild(divNode);
    }
    answerPart.prepend(divList);  

    if(cnt === 4) {
        console.log("success!");
        showPopup();
    }

    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";

    num1.focus();
}

makeRandomList();
gameForm.addEventListener("submit", handleBtn);

