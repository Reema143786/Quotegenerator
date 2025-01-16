
const quotes=[

"The only way to do great work is to love what you do.",
"In the middle of every difficulty lies opportunity.",
"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
"It does not matter how slowly you go as long as you do not stop.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"The best way to predict the future is to create it.",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
"Happiness is not something ready-made. It comes from your own actions.",
"The journey of a thousand miles begins with one step.",
"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
"You miss 100% of the shots you don’t take.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Your time is limited, so don't waste it living someone else's life.",
"Be the change that you wish to see in the world.",
"Life is what happens when you're busy making other plans.",
"Believe you can and you're halfway there.",
"We can't help everyone, but everyone can help someone.",
"The future belongs to those who believe in the beauty of their dreams.",
"It always seems impossible until it’s done.",
"Do what you can, with what you have, where you are.",
];

// It changes randomly


// function generatequote(){
// const text=document.querySelector('p');
// const index=Math.floor(Math.random()*quotes.length);
// text.textContent=quotes[index];

// };
// setInterval(generatequote,2000);



const color1 = [
    "#FF0000",
    "#008000",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#000000",
    "#808080",
    "#C0C0C0",
    "#800000",
    "#808000",
    "#800080",
    "#008080",
    "#000080",
    "#00FF00",
    "#FFC0CB",
    "#A52A2A",
    "#FFA500",
    "#FFD700"
  ];
  


function bodybackcolor(){
const colors=document.querySelector('body');
const index1=Math.floor(Math.random()*color1.length);
colors.style.backgroundColor=color1[index1];
}
setInterval(bodybackcolor,2000);



const button=document.querySelector('button');
// click,dblclick ,mousemove ,mouseover


button.addEventListener('click',(event)=>{
    const text=document.querySelector('p');
    const index=Math.floor(Math.random()*quotes.length);
    text.textContent=quotes[index];
    console.log(event.target) //button is target //here it takes which tag is target
    console.log(event.type) // dblclick,click,mouseover etc...
    console.log(event.clientX) // [x axis ]at which point we click [exact position it shows]
    console.log(event.clientY); // clickable position of Y 
})

// key board events [keydown,keyup]

// addEventListener('keyup' ,()=>{
//     const text=document.querySelector('p');
//    const index=Math.floor(Math.random()*quotes.length);
//     text.textContent=quotes[index];

// })


// From the above code if i pressing any key that quote [or] text is changing  But I want an o/p like this: If I am pressing the suotable key then only the text[or] qoute has to change



// addEventListener('keydown',(event)=>{
//     // console.log(event);  // event is a object whick keep many keyboard,mouse etc.. related events [when we trigger[or] press an event also it shows who like whick key does trigger]
//     if(event.key==="Enter"){
//         const text=document.querySelector('p');
//     const index=Math.floor(Math.random()*quotes.length);
//     text.textContent=quotes[index];
//     }
// console.log(event.target) // which tag is target here body is target because here we dont take  button.addEventListener('keydown',(event)=>{ if we take this it return target as button
// })
