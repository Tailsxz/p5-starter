/// <reference path="../global.d.ts"/>;
import "./style.css";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#0FF0AADD");
  textAlign(CENTER);
  textFont("Segoe UI");
  textStyle(BOLD);
  textSize(48);
  text("Hey! 😎", windowWidth / 2, windowHeight / 2);
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {}

function keyPressed() {}

window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.keyPressed = keyPressed;
window.windowResized = windowResized;
