// constants
const WIN_MESSAGE="Wow! You guessed right!, You are a lucky person!";
const LOW_MESSAGE="You guess is too Low!"
const HIGH_MESSAGE="You guess is too High!";
const OUT_OF_RANGE="Please enter a number less than 20";
const OUT_OF_GUESSES_MESSAGE = 'You have run out of guesses! Please click Again!';



const luckyNumber=Math.floor(Math.random()*20);
let score=10;

const userInputField=document.getElementById("guess");
const messageBox=document.getElementById("message");
const checkButton=document.getElementById("check");
const scoreSection=document.getElementById("score");
const playAgain=document.getElementById("again");
const mainSection=document.getElementById("main");
const colorSection=document.getElementById("color");
const scoreSection1=document.getElementById("score1")

scoreSection.textContent=score;
   

const playAgainFunc=()=>{
    const luckyNumber=Math.floor(Math.random()*20);
    let score=10;
    scoreSection.textContent=score;
    score=score+10;
    userInputField.value='';
    messageBox.textContent="Start Guesssing";
    checkButton.style.visibility="visible"
    scoreSection.style.visibility="visible";
    scoreSection1.style.visibility="visible";
    userInputField.style.visibility="visible";
    mainSection.style.backgroundColor = '#333';
    colorSection.style.backgroundColor="#333";
}
playAgain.addEventListener("click",playAgainFunc);
const checkFunction=()=>{
    const userGuess = Number(userInputField.value);

   if (userGuess>=20||userGuess<0 ){
    messageBox.textContent=OUT_OF_RANGE;
   }
   else{
    if(luckyNumber==userGuess){
       messageBox.textContent=WIN_MESSAGE;
       mainSection.style.backgroundColor='#367E18';
       colorSection.style.backgroundColor='#367E18';
       }
       else if(userGuess>luckyNumber){
        messageBox.textContent=HIGH_MESSAGE;
        mainSection.style.backgroundColor='#DD5353';
        colorSection.style.backgroundColor='#DD5353';
        score--;
       
       }
       else if(userGuess<luckyNumber){
        messageBox.textContent=LOW_MESSAGE;
        mainSection.style.backgroundColor='#DD5353';
        colorSection.style.backgroundColor='#DD5353';
        score--;
      
       }
       else{
        messageBox.textContent="You Lost!";
       }
   }
   scoreSection.textContent=score;
   if (score==0){
    messageBox.textContent=OUT_OF_GUESSES_MESSAGE;
    checkButton.style.visibility="hidden";
    scoreSection.style.visibility="hidden";
    scoreSection1.style.visibility="hidden";
    userInputField.style.visibility="hidden";
    mainSection.style.backgroundColor="#333";
    colorSection.style.backgroundColor="#333";
    score=score+10;
   }};
checkButton.addEventListener("click",checkFunction);
