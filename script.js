// Boxes
const hangMan = document.getElementById('hangmanBox');
const box = document.getElementById('box');
const guessingArea = document.getElementById('guessingArea');
const header = document.getElementById('header');

// buttons
const check = document.getElementById('check');
const reset = document.getElementById('reset');
const rule = document.getElementById('rule');
const return_Game = document.getElementById('return-game')

// input
const guess = document.getElementById('guess');

// values
const wrong = document.getElementById('wrong');
const left = document.getElementById('left');
var feedback = document.getElementById('feedback');
var wordfeedback = document.getElementById('thewordwas');
var explain = document.getElementById('rulesExplain')

// Random word
const words = ['student', 'teacher', 'laptop', 'pencil', 'pen', 'notebook', 'coding', 'school', 'backpack', 'principal', 'classroom', 'math', 'english', 'science', 'history', 'book', 'learning', 'rules', 'javascript', 'lesson', 'grade', 'academy', 'schedule', 'elementary', 'assignment', 'academic', 'bell', 'period', 'schedule', 'assembly', 'desk', 'smartboard', 'whiteboard', 'marker', 'quiz', 'test', 'exam', 'cafeteria', 'studying', 'study', 'learn', 'teach', 'teaching', 'eraser', 'presentation', 'project', 'transcript', 'college', 'university', 'graduation', 'computer', 'hoodie', 'table', 'chair', 'jacket', 'flagpole', 'clock', 'lightbulb', 'bus', 'television', 'couch', 'room', 'account', 'explain', 'speech', 'workshop', 'metal', 'plastic', 'human', 'electricity', 'water', 'aviation', 'campus', 'hangman', 'paper', 'worksheet', 'work', 'seat', 'house', 'home', 'bucket', 'square', 'circle', 'star', 'triangle', 'hair', 'folder', 'file', 'bottle', 'blinds', 'glass', 'eyes', 'arm', 'leg', 'foot', 'hand', 'shirt', 'pants', 'world', 'planet', 'universe', 'galaxy', 'space', 'dimension', 'number', 'phone', 'mathematics', 'bedroom', 'bathroom', 'bath', 'toilet', 'kitchen', 'toaster', 'oven', 'stove', 'pan', 'tablet', 'firewall', 'dog', 'cat', 'horse', 'pig', 'farm', 'farmer', 'chicken', 'rating', 'create', 'animation', 'audio', 'user', 'graphics', 'design', 'gameplay', 'game', 'video', 'play', 'difficulty', 'win', 'lose', 'sound', 'visual', 'art', 'break', 'spring', 'summer', 'fall', 'winter', 'season', 'friend', 'showcase', 'function', 'screw', 'nail', 'construction', 'construct', 'job', 'repair', 'hammer', 'car', 'drive', 'draw', 'write', 'bag', 'market', 'supermarket', 'google', 'firefox', 'microsoft', 'iphone', 'android', 'technology', 'tech', 'shoe', 'wood', 'iron', 'copper', 'geology', 'ship', 'letter', 'word', 'community', 'stop', 'start', 'caps', 'begin', 'end', 'ending', 'secret', 'truth', 'lie', 'time', 'movie', 'show', 'calculus', 'backspace', 'enter', 'keys', 'key', 'shift', 'tab', 'alternate', 'wrong', 'right', 'correct', 'incorrect', 'inside', 'outside', 'sun', 'mars', 'jupiter', 'uranus', 'earth', 'saturn', 'neptune', 'pluto', 'mercury', 'oval', 'heat', 'cool', 'cold', 'weather', 'rain', 'sunny', 'knife', 'spoon', 'fork', 'spork', 'line', 'essay', 'paragraph', 'length', 'width', 'column', 'row', 'underscore', 'barber', 'worker', 'heart', 'brain', 'guess', 'input', 'output', 'motion', 'gravity', 'genius', 'smart', 'lunch', 'breakfast', 'dinner'];
const word = words[Math.floor(Math.random() * words.length)];
// console.log("The word is --- ", word);
const splitWord = word.split('')


// Display the random word with underscores
function showWord(amount){
    const underscoreWord = [];
    for(let i = 0; i < amount; i++){
        underscoreWord.push("_")
    }
    // console.log("underscoreWord", underscoreWord);
    return underscoreWord;
}
let htmlUnder = showWord(splitWord.length)
// console.log("htmlUnder", htmlUnder);
document.getElementById('underscores').innerHTML = htmlUnder;


let guessesLeft = document.getElementById('guessesLeft');
var numLeft = 6;
guessesLeft.style.color = "green";
guessesLeft.innerHTML = numLeft;

// letters wrong
const lettersWrong = [];
document.getElementById('letWrong').innerHTML = lettersWrong;
// Function to check guess
function checkGuess(){
    var letter = document.getElementById('guess').value;
    document.getElementById('guess').value = "";
    var guessLetter = letter.toLowerCase();
    // console.log("Guess letter is --- ", guessLetter);
    // console.log("numLeft is --- ", numLeft, " --- before function")
    function trueOrFalse(){
        const required = /[a-zA-Z]/;
        var pass = required.test(guessLetter);
        if(pass == true){
                if(splitWord.includes(guessLetter)){
                    document.getElementById('underscores').innerHTML = htmlUnder;
                    return true;
                }else if(!splitWord.includes(guessLetter) && !lettersWrong.includes(guessLetter)){
                    return false;
                }else if(lettersWrong.includes(guessLetter) || htmlUnder.includes(guessLetter)){
                    return "used";
                };
        }else if(pass == false){
            return "invalid";
        }
    }
    // function trueOrFalse(){
        // if(splitWord.includes(guessLetter)){
            // document.getElementById('underscores').innerHTML = htmlUnder;
            // return true;
        // }else if(guessLetter >= 0 || guessLetter <= 0){
            // return "invalid";
        // }else if(!splitWord.includes(guessLetter) && !lettersWrong.includes(guessLetter)){
            // return false;
        // }else if(lettersWrong.includes(guessLetter) || htmlUnder.includes(guessLetter)){
            // return "used"
        // };
    // };
    if(trueOrFalse() === "used"){
        feedback.textContent = "Letter was already guessed";
        feedback.style.color = "orange";
        wordfeedback.innerHTML = "";
    };
    if(trueOrFalse() === true){
        feedback.textContent = `Your guess was correct!`;
        feedback.style.color = "green"
        wordfeedback.innerHTML = "";
        let letterIndex = splitWord.indexOf(guessLetter);
        let lastLetterIndex = splitWord.lastIndexOf(guessLetter);
        // console.log("last", lastLetterIndex);
        // console.log("first", letterIndex);
        htmlUnder.splice(letterIndex, 1, guessLetter);
        htmlUnder.splice(lastLetterIndex, 1, guessLetter);
        
        if(!htmlUnder.includes("_")){
            feedback.innerHTML = "You won!";
            feedback.style.fontWeight = "bold";
            wordfeedback.innerHTML = `You got the word, ${word}!
            <div>Press "Reset Game" to try again!</div>`;
            wordfeedback.style.color = "green";
            check.onclick = "N/A";
            htmlUnder = word;
        }
    };
    
    if(trueOrFalse() === false){
        // get rid of a guess
        numLeft = numLeft - 1;
        guessesLeft.innerHTML = numLeft;
        wordfeedback.innerHTML = "";
        // console.log("False, numLeft is now ---", numLeft);

        // show which letters are wrong
        lettersWrong.push(guessLetter);
        document.getElementById('letWrong').innerHTML = lettersWrong;
        
        feedback.textContent = `Your guess was wrong!`;
        feedback.style.color = "red";
        if(numLeft === 5){
            hangMan.innerHTML = `<div>O</div>`
            guessesLeft.style.color = "green"
        }else if(numLeft === 4){
            hangMan.innerHTML =  `<div>O</div>
                                <div>|</div>`
            guessesLeft.style.color = "green"

        }else if(numLeft === 3){
            hangMan.innerHTML = `<div>O</div>
                                <div>/|</div>`
            guessesLeft.style.color = "orange"                                
        }else if(numLeft === 2){
            hangMan.innerHTML = `<div>O</div>
                                <div>/|\\</div>`
            guessesLeft.style.color = "orange"
        }else if(numLeft === 1){
            hangMan.innerHTML = `<div>O</div>
                                <div>/|\\</div>
                                <div>/</div>`
            guessesLeft.style.color = "orange"
        }else if(numLeft <= 0){
            hangMan.innerHTML = `<div>O</div>
                                <div>/|\\</div>
                                <div>/\\</div>`
            hangMan.style.color = "red";
            check.onclick = "NA"
            guessesLeft.style.color = "red"
            feedback.innerHTML = `You lost!`;
            feedback.style.fontWeight = "bold";
            wordfeedback.innerHTML = `The word was ${word}!
            <div>Press "Reset Game" to try again!</div>`
            wordfeedback.style.color = "red";
        };
    };
    if(trueOrFalse() === "invalid"){
        feedback.innerHTML = `Invalid value.`;
        feedback.style.color = "orange";
        wordfeedback.innerHTML = 'Please use letters A-Z.'
        wordfeedback.style.color = "orange";
    }   
    // console.log("Guess was --- ", trueOrFalse());
}
// Function to restart the game
function resetGame(){
    // refreshes the page
    location.reload();
}
// get rid of guessingArea and everything else in order to show the rules
function rules(){
    box.style.display = "none";
    box.style.borderBottom = 0;
    document.getElementById('underscores').style.display = "none";
    check.style.display = "none";
    reset.style.display = "none";
    guess.style.display = "none";
    wrong.style.display = "none";
    left.style.display = "none";
    feedback.style.display = "none";
    wordfeedback.style.display = "none";
    rule.style.display = "none";
    explain.style.display = "block";
    return_Game.style.display = "block";
}
// get rid of rules and show guessingArea and everything else to show the game
function returnGame(){
    box.style.display = "block";
    box.style.borderBottom = "2px solid black"
    document.getElementById('underscores').style.display = "block";
    check.style.display = "inline-block";
    reset.style.display = "inline-block";
    guess.style.display = "inline-block";
    wrong.style.display = "block";
    left.style.display = "block";
    feedback.style.display = "block";
    wordfeedback.style.display = "block";
    rule.style.display = "inline-block";
    explain.style.display = "none";
    return_Game.style.display = "none";
}