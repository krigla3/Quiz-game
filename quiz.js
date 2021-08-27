//Variable and question structure//

const inquiry = document.querySelector('#inquiry');
const solutions = Array.from(document.querySelectorAll('.solutionData'));
const status= document.querySelector('#status');
const resultNumber = document.querySelector('#result');
const statusBarFull = document.querySelector('#statusBarFull');

let currentInquiry = {}
let correctAnswers = true
let result = 0
let inquirycount = 0
let availableInquiries= []

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
        question: "What is 1 + 3?",
        solution1: "1",
        solution2: "2",
        solution3: "4",
        solution4: "3",
        answer: 3,
    },
    {
        question: "What is 1 + 4?",
        solution1: "5",
        solution2: "4",
        solution3: "2",
        solution4: "1",
        answer: 1,
    }
]

const MAX_SCORE = 1000
const MAX_INQUIRIES = 5

//start game and next question functionality//

startGame = () => {
    inquirycount = 0
    result = 0
    availableInquiries = [...inquiries]
    getNewInquiry()
}

getNewInquiry = () => {
    if(vailableInquiries.length === 0 || inquirycount > MAX_INQUIRIES) {
        localStorage.setItem('mostRecentScore', result)

    }

    inquirycount++
    status.innerText = `Inquiry ${inquirycount} of ${MAX_INQUIRIES}`
    statusBarFull.style.width = `${(nquirycount/MAX_INQUIRIES) * 100}%`

  
    const inquiryNumber = Math.floor(Math.random() * availableInquiries.length)
    currentQuestion = availableInquiries[inquiryNumber]
    inquiry.innerText = currentInquiry.inquiry

    solutions.forEach(solution => {
        const number = solution.dataset['number']
        solution.innerText = currentQuestion['solution' + number]
    })

    availableInquiries.splice(inquiryNumber, 1)

    orrectAnswers = true
}

