/// <reference path="../global.d.ts"/>;
import "./style.css";

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#0FF0AADD");
  textAlign(CENTER);
  textFont("system-ui");
  textStyle(BOLD);
  textSize(48);
  text("Hey! 😎", windowWidth / 2, windowHeight / 2);
}

function draw() {}

function windowResized() {}
function mousePressed() {}
function keyPressed() {}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.keyPressed = keyPressed;
window.windowResized = windowResized;
