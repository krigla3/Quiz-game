/*jshint esversion: 6 */

const endResult = document.querySelector('#endResult');
const mostRecentScore = localStorage.getItem('mostRecentScore');

endResult.innerText = mostRecentScore;


