var ball1 = document.getElementById("ball")
var ball2 = document.getElementById("ball2")

var ball1Position = {
  "positionX" : 50,
  "positionY" : 50,
  "reverse" : false
}

var ball2Position = {
  "positionX" : 500,
  "positionY" : 50,
  "reverse" : false
}

function updateBallPosition(ball, x, y) {
  ball.style.left = x + "px"
  ball.style.top = y + "px"
}

function moveBallLeftRight(ball, Xmin, Xmax, ballPosition) {
  let velocity = 20
  if (ballPosition.reverse == true) { //x,y decrease
    ballPosition.positionX = ballPosition.positionX - velocity
    ballPosition.positionY = ballPosition.positionY - velocity
  } else { //x, y increase
    ballPosition.positionX = ballPosition.positionX + velocity
    ballPosition.positionY = ballPosition.positionY + velocity
  }
  updateBallPosition(ball, ballPosition.positionX, ballPosition.positionY)
  if (ballPosition.positionX > Xmax || ballPosition.positionX < Xmin) {
    ballPosition.reverse = !ballPosition.reverse
  }
}

function moveBallRightLeft(ball, Xmin, Xmax, ballPosition) {
  let velocity = 20
  if (ballPosition.reverse == true) { //x increase, y decrease
    ballPosition.positionX = ballPosition.positionX + velocity
    ballPosition.positionY  = ballPosition.positionY - velocity
  } else { //x decrease, y increase
    ballPosition.positionX = ballPosition.positionX - velocity
    ballPosition.positionY = ballPosition.positionY + velocity
  }
  updateBallPosition(ball, ballPosition.positionX, ballPosition.positionY)
  if (ballPosition.positionX < Xmin || ballPosition.positionX > Xmax) {
    ballPosition.reverse = !ballPosition.reverse
  }
}

setInterval(
  moveBallLeftRight(ball1, 50, 500, ball1Position),
  moveBallRightLeft(ball2, 50, 500, ball2Position),
70)



