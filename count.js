let sentence = ["Hello", "my", "name","is", "Souvik"]
let greetingsEl = document.getElementById("greeting-el")

for (let i = 0; i<sentence.length;i++) {
    greetingsEl.textContent += sentence[i] + " "
}