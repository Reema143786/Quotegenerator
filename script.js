
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
function generatequote(){
const text=document.querySelector('p');
const index=Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index];

};
setInterval(generatequote,2000);

