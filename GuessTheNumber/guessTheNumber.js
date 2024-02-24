function generateRandomNum(min,max){
    // input from the user
    
    // generating a random number
    var a ;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomNum=generateRandomNum(1,100);
    randomNum=Number.parseInt(randomNum)
    
    let guessedNum;
    let score=100;
    score=Number.parseInt(score);
    let count=0;
    count=Number.parseInt(count)
    while(guessedNum!=randomNum){
        guessedNum=prompt("enter your guess between 1 and 100");
    if(guessedNum==randomNum){
       alert(`your guess is correct.
            your score is ${score-count}`);
           
    
     }
     else if(guessedNum<randomNum &&guessedNum>0){
        alert("your number is smaller than actual number")
        count++;
     }
     else if(guessedNum>randomNum &&guessedNum<100){
    alert("your number is greater than actual number")
       count++;
     }
    else{
       alert(`enter number between 1 and 100`)
       count++;
       
    }
}
