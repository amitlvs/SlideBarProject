const wordSuggest = [
    "My name is Amit Kumar. I run a Youtube channel named as Techi Mac Amit. Contents on this Youtube channel are related to MacBook Air Configuration and apps installations.",
    "Do Checkout this amazing Youtube Channel Techi Mac Amit. Get information about how to install developer based app and softwares using terminal.",
    "Hello Amit here !! I'm a software developer. I work on Front end developments. Used technologies are like React Js, JavaScript, Bootstrap, HTML 5 , CSS 3 ",
    "Feel free to be part of Techi Mac Amit. And get benificial informations which will save your money for buying MacBooks, iPhones, AirPods & iPads with your name ingraved."
]
const msg = document.getElementById('msg');
const myWords = document.getElementById('myWords');
const btn = document.querySelector('.mainButton');

let startTime ;
let endTime;


// This will help in proving random text, start time of the game.
const playGame = () => {
    let randomNum = Math.floor(Math.random()*wordSuggest.length);
    msg.innerText = wordSuggest[randomNum];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    
}
const wordCounter = (str) => {
    let response = str.split(' ').length;
    return response;
}
const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    
    let totalString = myWords.value;
    let wordCount = wordCounter(totalString);

    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = "Hey You have succesfully did Your Challenge. Your typing speed is " +speed+ " words per minute. Score Better Next Time."

    // finalMsg += compareWords( msg.innerText, totalString );
    msg.innerHTML = finalMsg;
}
btn.addEventListener('click', function(){
    
    if(this.innerText == 'Start'){
        myWords.disabled = false ;
        myWords.value = "";
        playGame();
    }else if(this.innerText == 'Done'){
        myWords.disabled = true ;
        btn.innerText ="Start"
        setTimeout(()=>{
            myWords.value = "";

        },1000)
        endGame();
    }
});