let x, y; // Position
let xSpeed, ySpeed; // Speed
let logo;

function setup() {
  createCanvas(1200, 800);
  x = width / 2;
  y = height / 2;
  xSpeed = 5;
  ySpeed = 3;
  logo = loadImage('dvd_logo.png'); // Load your logo image
}

function draw() {
  background(0);
  
  // Update position
  x += xSpeed;
  y += ySpeed;
  
  // Bounce off boundaries
  if (x + logo.width / 2 > width || x - logo.width / 2 < 0) {
    xSpeed *= -1;
  }
  if (y + logo.height / 2 > height || y - logo.height / 2 < 0) {
    ySpeed *= -1;
  }
  
  // Draw the DVD logo
  image(logo, x - logo.width / 2, y - logo.height / 2);
}


