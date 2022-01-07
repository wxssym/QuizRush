//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
}

function setup() {
  // settings object
  
  settings = new settings(20);

  // players initialisation
  players = [];

  // main screen ui
  ui_title_screen();
}

function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// Display functions


function ui_medium_question() {
  console.log('medium is selected');
}

function ui_hard_question() {
  console.log('hard is selected');
}
