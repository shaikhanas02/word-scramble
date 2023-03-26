let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

const wordText = document.querySelector('.word') ;
const randomText = document.querySelector('.hint span') ;
const refreshBtn = document.querySelector('.refresh-word') ;
const checkBtn = document.querySelector('.check-word') ;
const inputField = document.querySelector('input') ;
let correctWord ;

const initGame = () =>{
let randomObj = words[Math.floor(Math.random()* words.length)] ;
let wordArray = randomObj.word.split("") ;
for(let i = 0 ; i< wordArray.length ; i++){
    let j = Math.floor(Math.random()*(i+1)) ;
    let temp = wordArray[i];
    wordArray[i] = wordArray[j] ;
    wordArray[j] = temp ;
}
wordText.innerText = wordArray.join('');
randomText.innerText = randomObj.hint ; 
correctWord = randomObj.word.toLowerCase() ;
inputField.value = "" ;
inputField.setAttribute('maxlength',correctWord.length) ;
console.log(randomObj)    ;    
}

initGame() ;

const checkWord = () => {
let userWord = inputField.value.toLocaleLowerCase() ;
if(!userWord) return alert(`Please enter a word`) ;
if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`) ;

alert(`Congrats! ${userWord.toUpperCase()} is a correct word`) ;
initGame() ;
}

refreshBtn.addEventListener('click', initGame) ;
checkBtn.addEventListener('click', checkWord) ;