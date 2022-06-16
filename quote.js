const words = ["Your time is limited, so do not waste it living someone else life.",
"You can never plan the future by the past.",
"No one ever finds life worth living - one has to make it worth living.",
"It is better to be hated for what you are than to be loved for what you are not.",
"Never let anyone put you in chains.",
"By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
"A person who never made a mistake never tried anything new."];
const randomindex = Math.floor(Math.random()*words.length); 
console.log(randomindex);
const quote = document.querySelector(".quote")
quote.textContent = `${words[randomindex]}`

const red = document.querySelector(".red1")
const blue = document.querySelector(".blue1")
const green = document.querySelector(".green1")
const violet = document.querySelector(".violet1")

red.addEventListener("click",function(){
    quote.classList.add("red");
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("violet");

});

blue.addEventListener("click",function(){
    quote.classList.add("blue");
    quote.classList.remove("red");
    quote.classList.remove("green");
    quote.classList.remove("violet");

});

green.addEventListener("click",function(){
    quote.classList.add("green");
    quote.classList.remove("blue");
    quote.classList.remove("red");
    quote.classList.remove("violet");

});

violet.addEventListener("click",function(){
    quote.classList.add("violet");
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("red");
});




