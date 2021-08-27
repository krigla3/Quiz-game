const endResult = document.querySelector('#endResulte')
const mostRecentScore = localStorage.getItem('mostRecentScore')



finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

const score = {
    score: mostRecentScore,
}

