const inputEl = document.getElementById("input-el")
const countBtn = document.getElementById("count-btn")
const numVowelsEl = document.getElementById("num-vowels-el")
const vowels = ["a", "e", "i", "o", "u"]

vowelCount = 0

countBtn.addEventListener("click", function(){ 
    let sentenceString = inputEl.value  
    for (let i = 0; i<sentenceString.length; i++){
        vowelCheck(sentenceString.charAt(i))
    }
})

function vowelCheck(letter){
    for (let i = 0; i < vowels.length; i++){
        if (vowels[i] === letter){
            vowelCount ++
            numVowelsEl.innerText = vowelCount            
        }
    }
}