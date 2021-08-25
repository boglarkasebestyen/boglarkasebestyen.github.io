const pacArray = [
  "./images/frog1.png", 
  "./images/frog2.png", 
  "./images/frog3.png", 
  "./images/frog4.png"
];

let pacMen = []; // this array holds all the frogs

// this function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// factory to make a frog at a random position with random velocity
function makePac() {
  // returning an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); 
  let position = setToRandom(200);

  // adding image to div id="game"
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";

  //adding a random image out of the 4 from the pacArray array
  let randImgIndex = Math.floor(Math.random() * 4); 
  newimg.src = pacArray[randImgIndex];
  newimg.width = 250;

  // TODO: set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // TODO: add new child image to game
    game.appendChild(newimg);

  // returning details in an object
  return {
            position: position, velocity: velocity, newimg: newimg
        };
}

function update() {
  // looping over pacmMen array, moving each one, and moving image in DOM
  pacMen.forEach((item) => {
    // NEW: added if statement / play sound when there's a collision
    if (checkCollisions(item)) {
      playSound();
    }

    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detecting collision with all walls and making the frog bounce
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
      item.position.x + item.velocity.x < 0) {
        item.velocity.x = -item.velocity.x;
        return true;
  }
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
      item.position.y + item.velocity.y < 0) {
        item.velocity.y = -item.velocity.y;
        return true;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new frog
}

// NEW: for the reset button, reloads the page
function reset() {
  location.reload();
}

// NEW: adding sound that plays when the frog hits the wall
function playSound() {
  let sheesh = new Audio();
  sheesh.src = "audio/sheee.mp3";
  sheesh.play();
}

