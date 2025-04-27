'use strict'

var c = 0
var gBoardSize = 4
var gCellCount = 1
var gGameInterval
var gNums = createNums()

function onInit() {
  var timer = document.querySelector('.timer')
  timer.innerText = '0'

  gCellCount = 1
  clearInterval(gGameInterval)

  renderBoard()
}

function onChangeDifficulty(difficulty = 4) {
  clearInterval(gGameInterval)
  var timer = document.querySelector('.timer')
  timer.innerText = '0'
  c = 0
  gCellCount = 1
  // var difficulty = 4
  var elBoard = document.querySelector('.board')

  elBoard.innerHTML = ''

  gBoardSize = difficulty
  gNums = createNums()

  renderBoard()
}

function createNums() {
  var numbers = []

  for (var i = 1; i <= gBoardSize ** 2; i++) {
    numbers.push(i)
  }

  return numbers
}

// renderBoard()
function renderBoard() {
  var strHTML = ''
  var elBoard = document.querySelector('.board')
  for (var i = 0; i < gBoardSize; i++) {
    strHTML += `<tr>`

    for (var j = 0; j < gBoardSize; j++) {
      var randNum = drawNum()
      strHTML += `<td onclick="(onCellClicked(this,${randNum}))" class ="${j}">${randNum}</td>`
    }
    strHTML += `</tr>`
  }

  elBoard.innerHTML += strHTML
}

function onCellClicked(elTd, clickedNum) {
  console.log(elTd)

  console.log(clickedNum)

  if (clickedNum === gBoardSize ** 2) clearInterval(gGameInterval)

  if (gCellCount === clickedNum) {
    console.dir(elTd)
    elTd.classList.add('mark')
    gCellCount++
    if (clickedNum === 1) {
      gGameInterval = setInterval(myCounter, 1000)
    }
  }
}

function drawNum() {
  var randIdx = getRandomInt(0, gNums.length)
  var randomNum = gNums.splice(randIdx, 1)
  return randomNum[0]
}

function myCounter() {
  var elTimer = document.querySelector('.timer')

  elTimer.innerHTML = ++c
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}
