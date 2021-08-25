document.onmousemove = () => {
  //my code
  var balls = [];
  //  need to remove HTMLCollection elements from the DOM
  let yellowBalls = Array.prototype.slice.call(document.getElementsByClassName("ball-yellow"), 0);
  let blackBalls = Array.prototype.slice.call(document.getElementsByClassName("ball-yellow"), 0);
  for (let i in yellowBalls) { 
    balls.push(yellowBalls[i]);
  }
  for (let i in blackBalls) {
    balls.push(blackBalls[i]);
  }


/* Provided code: Outputs the coordinates of the mouse pointer when the mouse button is clicked on an element:

var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY;     // Get the vertical coordinate
*/

  var x = (event.clientX * 90) / window.innerWidth + "%";
  var y = (event.clientY * 90) / window.innerHeight + "%";

  //Provided code:
  // balls[0].style.left = x;
  // balls[0].style.top = y;
  // balls[0].style.transform = 'translate(-' + x + ',-' + y + ')';

  //my code:
  for (let i = 0; i < balls.length; i++) { // mert 2 ball van?
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};
