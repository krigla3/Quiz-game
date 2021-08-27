const inquiry = document.querySelector('#inquiry');
const solutions = Array.from(document.querySelectorAll('.solution-data'));
const status= document.querySelector('#status');
const resultNumber = document.querySelector('#result');
const progressBarFull = document.querySelector('#statusBarFull');

let currentInquiry = {}
let correctAnswers = true
let result = 0
let inquiryNumber = 0
let availableInquiries= []