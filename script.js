let num = Math.floor((Math.random() * 100) + 1);
let attempt=0;
let cnt=100;
let score=document.getElementById("score");
let guess=document.getElementById("guess");
function check(){
const input =parseInt(document.getElementById("guessinp").value);
attempt++;


if(input == num){
    document.getElementById("result").textContent="Congratulations! 👏👏 You guessed the correct number.";
    score.textContent=cnt;
}
else if(input < num){
    document.getElementById("result").textContent=`💡 Hint :- The number is greater than ${input}`;
    cnt--;

}
else{
    document.getElementById("result").textContent=`💡 Hint :- The number is less than ${input}`;
    cnt--;
}
    
    
    guess.textContent=attempt;
    
}

