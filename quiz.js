/*jshint esversion: 6 */

//Variable and question structure//

const inquiry = document.querySelector('#inquiry');
const solutions = Array.from(document.querySelectorAll('.solutionData'));
const status = document.querySelector('#status');
const resultNumber = document.querySelector('#result');
const statusBarFull = document.querySelector('#statusBarFull');
const answers = document.querySelectorAll('.answerBox');
//initialize ganme variables//
let currentInquiry = {};
let correctAnswers = true;
let result = 0;
let inquiryCount = 0;
let availableInquiries = [];
//create list of questions and answers
let inquiries = [
    {
        inquiry: 'What is Scooby Doo’s full name?',
        solution1: 'Vivian Doolally',
        solution2: 'Scoobert Doo',
        solution3: 'Clyde Wangsbottom',
        solution4: 'Rodney Toothwiggle',
        answer: 2,
    },
    {
        inquiry:
            "What is the collective noun for a group of unicorns?",
        solution1: " A blessing",
        solution2: " An annoyance",
        solution3: "A scrumpy",
        solution4: "A unibomber",
        answer: 1,
    },
    {
        inquiry: "Native to the Caribbean, what sort of animal is the mountain chicken?",
        solution1: "Beetle",
        solution2: "Fox",
        solution3: "Frog",
        solution4: "Wild goose",
        answer: 3,
    },
    {
        inquiry: "It is estimated that millions of trees world wide are accidentally planted by which species with bad memories?",
        solution1: "Squirrels",
        solution2: "Bats",
        solution3: "Chickens",
        solution4: "Killer whales",
        answer: 1,
    },
    {
        inquiry: "Guinness Brewery in Dublin has a .... year lease on it's property.",
        solution1: "9000",
        solution2: "5700",
        solution3: "250",
        solution4: "9",
        answer: 1,
    },
    {
        inquiry: "Due to its gravitational pull, what generally happens to the human body when the moon is directly overhead?",
        solution1: "You will walk sideways",
        solution2: "You will howl at the moon",
        solution3: "You will weigh less",
        solution4: "You will be 3 inches taller",
        answer: 4,
    },
    {
        inquiry: "What is 1 + 7?",
        solution1: "8",
        solution2: "5",
        solution3: "4",
        solution4: "3",
        answer: 1,    
    },
    {
        inquiry: "Where is Newgrange - a 5000 year old Passage Tomb located?",
        solution1: "France",
        solution2: "Ireland",
        solution3: "Scotland",
        solution4: "England",
        answer: 2,
    },
    {
        inquiry: "What is 1 + 7?",
        solution1: "8",
        solution2: "5",
        solution3: "4",
        solution4: "3",
        answer: 1,   
    },
    {
        inquiry: "What is 1 + 7?",
        solution1: "8",
        solution2: "5",
        solution3: "4",
        solution4: "3",
        answer: 1,   
    },
    {
        inquiry: "What is 1 + 7?",
        solution1: "8",
        solution2: "5",
        solution3: "4",
        solution4: "3",
        answer: 1,   
    },

    
];
//set max score and max questions//

const MAX_SCORE = 200;
const MAX_INQUIRIES = 5;

//start game and next question functionality//

startGame = () => {
    inquiryCount = 0;
    result = 0;
    availableInquiries = [...inquiries];
    getNewInquiry();
}
//get new questions function//
getNewInquiry = () => {
    
//question count to html//
    inquiryCount++;
    status.innerText = `Inquiry ${inquiryCount} of ${MAX_INQUIRIES}`;
    statusBarFull.style.width = `${(inquiryCount/MAX_INQUIRIES) * 100}%`;

  //get random question from available questions//
    const inquiryNumber = Math.floor(Math.random() * availableInquiries.length);
    currentInquiry = availableInquiries[inquiryNumber];
    inquiry.innerText = currentInquiry.inquiry;

    solutions.forEach(solution => {
        const number = solution.dataset['number'];
        solution.innerText =  currentInquiry['solution' + number];

        
    })

    availableInquiries.splice(inquiryNumber, 1);

    correctAnswers = true;

    
};

 //event listener functionality for detyermining the right or wrong answer//

 solutions.forEach(solution => {
    solution.addEventListener('click', e => {
        if(!correctAnswers) return

        correctAnswers  = false
        const selectedSolution = e.target
        const selectedAnswer = selectedSolution.dataset['number'];

        let styleToApply = selectedAnswer ==  currentInquiry.answer ? 'right' : 'wrong';

        if(styleToApply === 'right') {
            incrementScore(MAX_SCORE)
        }
// apply right or wrong css styling to users pick//
        selectedSolution.parentElement.classList.add(styleToApply);
        
        setTimeout(() => {
           selectedSolution.parentElement.classList.remove(styleToApply);
           getNewInquiry();
  
        }, 1000)
//
       if(inquiryCount == 4) {
           
           endGame() 
       }
    })
})

incrementScore = num => {
    result +=num;
    resultNumber.innerText = result;

    
}

function endGame() {
    localStorage.setItem('mostRecentScore', result);

    return window.location.assign('/finishedquiz.html');
  }

startGame()






