// //  display a personalized welcome message

// function displayWelcomeMessage() {
//     var name = prompt("Enter your name:");
//     alert("Welcome, " + name + "!");
// }
// displayWelcomeMessage();

//   generate a random quote

// function generateQuote() {
//     let quotes = [
//         "The only way to do great work is to love what you do. - Steve Jobs",
//         "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
//         "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//         "Believe you can and you're halfway there. - Theodore Roosevelt",
//         "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
//     ];
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
// }
// let randomQuote = generateQuote();
// console.log( randomQuote);


//  generate a random number between 1 and 100

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
let randomNumber = generateRandomNumber();
console.log( randomNumber);