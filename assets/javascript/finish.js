/*jshint esversion: 6 */


// display the most recent score.  //

const endResult = document.querySelector('#endResult');
const mostRecentScore = localStorage.getItem('mostRecentScore');

endResult.innerText = mostRecentScore;


