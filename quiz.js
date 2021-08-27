//Variable and question structure//

const inquiry = document.querySelector('#inquiry');
const solutions = Array.from(document.querySelectorAll('.solutionData'));
const status = document.querySelector('#status');
const resultNumber = document.querySelector('#result');
const statusBarFull = document.querySelector('#statusBarFull');

let currentInquiry = {};
let correctAnswers = true;
let result = 0;
let inquiryCount = 0;
let availableInquiries = [];

let inquiries = [
    {
        inquiry: 'What is 1 + 1?',
        solution1: '1',
        solution2: '2',
        solution3: '21',
        solution4: '17',
        answer: 2,
    },
    {
        inquiry:
            "What is 1 + 2?",
        solution1: "3",
        solution2: "2",
        solution3: "1",
        solution4: "4",
        answer: 1,
    },
    {
        inquiry: "What is 1 + 3?",
        solution1: "1",
        solution2: "2",
        solution3: "4",
        solution4: "3",
        answer: 3,
    },
    {
        inquiry: "What is 1 + 4?",
        solution1: "5",
        solution2: "4",
        solution3: "2",
        solution4: "1",
        answer: 1,
    },
    {
        inquiry: "What is 1 + 5?",
        solution1: "6",
        solution2: "5",
        solution3: "4",
        solution4: "3",
        answer: 1,
    },
    {
        inquiry: "What is 1 + 6?",
        solution1: "7",
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

const MAX_SCORE = 200;
const MAX_INQUIRIES = 5;

//start game and next question functionality//

startGame = () => {
    inquiryCount = 0;
    result = 0;
    availableInquiries = [...inquiries];
    getNewInquiry();
}

getNewInquiry = () => {
    if(availableInquiries.length === 0 || inquiryCount > MAX_INQUIRIES) {
        localStorage.setItem('mostRecentScore', result);

        return window.location.assign('/finishedquiz.html');
    }

    inquiryCount++;
    status.innerText = `Inquiry ${inquiryCount} of ${MAX_INQUIRIES}`;
    statusBarFull.style.width = `${(inquiryCount/MAX_INQUIRIES) * 100}%`;

  
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

 //event listener functionality for possible solutions in the quiz//

 solutions.forEach(solution => {
    solution.addEventListener('click', e => {
        if(!correctAnswers) return

        correctAnswers  = false
        const selectedSolution = e.target
        const selectedAnswer = selectedSolution.dataset['number']

        let styleToApply = selectedAnswer ==  currentInquiry.answer ? 'right' : 'wrong'

        if(styleToApply === 'right') {
            incrementScore(MAX_SCORE)
        }

        selectedSolution.parentElement.classList.add(styleToApply)
        
        setTimeout(() => {
           selectedSolution.parentElement.classList.add(styleToApply)
           getNewInquiry()
  
        }, 1000)
    })
})

incrementScore = num => {
    result +=num
    resultNumber.innerText = result
}

startGame()




