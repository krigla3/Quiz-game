const inquiry = document.querySelector('#inquiry');
const solutions = Array.from(document.querySelectorAll('.solutionData'));
const status= document.querySelector('#status');
const resultNumber = document.querySelector('#result');
const progressBarFull = document.querySelector('#statusBarFull');

let currentInquiry = {}
let correctAnswers = true
let result = 0
let inquiryNumber = 0
let availableInquiries= []

let questions = [
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

