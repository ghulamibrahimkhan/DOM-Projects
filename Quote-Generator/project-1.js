const button = document.getElementById('new-quote');
const person = document.querySelector('.person');
const quote = document.querySelector('.quote');

const quotesArr = [
    {
        quote: '"Success is always stressful."',
        person: 'Andrew Tate'
    },
    {
        quote: '"Obsessed is a word the lazy use to describe the dedicated"',
        person: 'Zyzz'
    },
    {
        quote: '"Nearly all men can stand adversity, but if you want to test a mans character, give him power"',
        person: 'Abaraham Lincon'
    },
    {
        quote: '"No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable."',
        person: 'Socrates'
    }
]


let previousNumber
button.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * quotesArr.length)
    while (randomNum === previousNumber) {
        randomNum = Math.floor(Math.random() * quotesArr.length)
    }
    previousNumber = randomNum
    quote.innerText = quotesArr[randomNum].quote;
    person.innerText = quotesArr[randomNum].person
    console.log(randomNum);
})
