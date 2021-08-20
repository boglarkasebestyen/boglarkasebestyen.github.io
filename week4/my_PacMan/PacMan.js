/* pos is the PacMan image position variable; it is set to 0 initially */
var pos = 0;

/* this variable defines what direction should PacMan go into:
0 = left to right
1 = right to left (reverse)
*/
var direction = 0;

/* This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1 */
var focus = 0;

/* This array contains all the PacMan movement images */
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

/* Every time this function is called, it updates the PacMan image, position and direction on the screen. */
function run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;

  focus = (focus + 1) % 2;  //focus: helps to determine which PacMan image should be displayed; it flips between values 0 and 1
  direction = checkPageBounds(direction, imgWidth);   //direction: 0 = left to right, 1 = right to left (reverse)
  img.src = pacArray[direction][focus];

  if (direction == 1) {  //if direction goes from right to left
    pos = pos - 20;
    img.style.left = pos + 'px';
  } else {              // if direction goes from left to right
    pos =  pos + 20;
    img.style.left = pos + 'px';
  }
}

/*
TODO: 

Add a Javascript setInterval() method that will call the run() function above every 200 milliseconds. 
Inside of the run() function you will also have to add an extra argument "pageWidth", 
which is declared on line 4 when you call the checkPageBounds() function below. 
*/

//setInterval(run(pageWidth), 200)

/* Or without pageWidth, which results in the constant movement of PacMan */
setInterval(run, 100)


/*This function determines the direction of PacMan based on screen edge detection. */
function checkPageBounds(direction, imgWidth) {

//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
  let pageWidth = window.innerWidth;

/*
   TODO: Reverse direction upon hitting screen edge.
*/
    if (direction == 0 && pos + imgWidth > pageWidth) {
        direction = 1;
    } else if (direction == 1 && pos < 0) {
        direction = 0;
    }
  return direction;
}


