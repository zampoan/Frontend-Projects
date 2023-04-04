let homePoints = document.getElementById("home-points")
let awayPoints = document.getElementById("away-points")
let homeScore = 0
let awayScore = 0

function homePlus1() {
  homeScore += 1
  homePoints.textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    homePoints.textContent = homeScore
}

function awayPlus1() {
    awayScore += 1
    awayPoints.textContent = awayScore
  }
  
  function awayPlus3() {
      awayScore += 3
      awayPoints.textContent = awayScore
  }