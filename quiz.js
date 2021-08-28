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
        inquiry: "This rock legend released these songs: 'Crazy Train', 'Bark At The Moon' and 'Mama I'm Coming Home'. Who was he??",
        solution1: "Paul McCartney",
        solution2: "Ozzy Osbourne",
        solution3: "Bon Jovi",
        solution4: "Freddie Mercury",
        answer: 2,    
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
        inquiry: " A woodpecker can peck how many times per second?",
        solution1: " 700 times",
        solution2: "9 times",
        solution3: "57 times",
        solution4: "20 times",
        answer: 4,   
    },
    {
        inquiry: "Which country does not border Germany?",
        solution1: "France",
        solution2: "Italy",
        solution3: "Belgium",
        solution4: "Poland",
        answer: 2,   
    },
    {
        inquiry: "An ant always falls on which side when it is intoxicated?",
        solution1: "Left",
        solution2: "Right",
        solution3: "Front",
        solution4: "Back",
        answer: 1,   
    },
    {
        inquiry: "In space, which thing can astronauts not perform properly?",
        solution1: "Sneeze",
        solution2: "Cough",
        solution3: "Cry",
        solution4: "Hiccup",
        answer: 3,   
    },
    {
        inquiry: "Coprastastaphobia is the fear of what?",
        solution1: "Copycats",
        solution2: "Photocopiers",
        solution3: "Copper",
        solution4: "Constipation",
        answer: 4,   
    },
    {
        inquiry: "Walt Disney was said to be afraid of which creature?",
        solution1: "Mice",
        solution2: "Squirrels",
        solution3: "Elephants",
        solution4: "Butterflies",
        answer: 1,   
    },
    {
        inquiry: "Who entered a contest to find his own look-alike and came 3rd?",
        solution1: "Charlie Chaplin",
        solution2: "Conor MacGregor",
        solution3: "Elvis Presley",
        solution4: "Dalai Lama",
        answer: 1,   
    },
    {
        inquiry: "It's illegal in Texas to put what on your neighbour’s Cow?",
        solution1: "Lipstick",
        solution2: "Grafitti",
        solution3: "Socks",
        solution4: "Toddlers",
        answer: 2,   
    },
    {
        inquiry: "Which of these bands recorded these songs: 'Fairies wear boots' and 'Paranoid'?",
        solution1: "AC/DC",
        solution2: "Led Zeppelin",
        solution3: "Motley Crue",
        solution4: "Black Sabbath",
        answer: 4,   
    },
    {
        inquiry: "What is the most common colour of toilet paper in France?",
        solution1: "White",
        solution2: "Green",
        solution3: "Pink",
        solution4: "Cream",
        answer: 3,   
    },
    {
        inquiry: "Entomology is the science that studies",
        solution1: "The origin of words",
        solution2: "Kitchen utensils",
        solution3: "Insects",
        solution4: "The colour of leaves",
        answer: 3,   
    },
    {
        inquiry: "Who is Spiderman's human persona?",
        solution1: "Clark Kent",
        solution2: "Peter Parker",
        solution3: "Sue Storm",
        solution4: "Wanda Maximoff",
        answer: 2,   
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






