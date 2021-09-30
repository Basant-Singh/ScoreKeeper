const score = document.querySelector('.main h1');
const scoreOne = document.querySelector('.one');
const scoreTwo = document.querySelector('.two');
const buttons = document.querySelectorAll('.btn');
const plays = document.querySelector('.main select');
let counterOne = 0, counterTwo = 0, playNumber = 3;

plays.addEventListener('change',function(){
    playNumber = parseInt(this.value);
    reset();
})

function disableBtn(){
    for(let i=0;i<2;i++){
        buttons[i].setAttribute('disabled','true');
    }
}


function addOne(){
    counterOne++;
    scoreOne.innerText = counterOne;
    if(counterOne === playNumber){
        disableBtn();
        scoreOne.classList.add('win');
        scoreTwo.classList.add('lose');
    }
}
function addTwo(){
    counterTwo++;
    scoreTwo.innerText = counterTwo;
    if(counterTwo === playNumber){
        disableBtn();
        scoreTwo.classList.add('win');
        scoreOne.classList.add('lose');
    }
}
function reset(){
    counterOne = 0;
    counterTwo = 0;
    scoreOne.innerText = counterOne;
    scoreTwo.innerText = counterTwo;
    for(let i=0;i<2;i++){
        buttons[i].removeAttribute('disabled');
    }
    if(scoreOne.classList.contains('win')){
        scoreOne.classList.remove('win');
        scoreTwo.classList.remove('lose');
    }
    else{
        scoreOne.classList.remove('lose');
        scoreTwo.classList.remove('win');

    }
    

}

buttons[0].addEventListener('click',addOne)
buttons[1].addEventListener('click',addTwo)
buttons[2].addEventListener('click',reset)