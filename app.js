//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
  quiz_rush_logo = loadImage('assets/logo.png');
  quiz_rush_font = loadFont('assets/fonts/scribble.ttf');
}

function setup() {
  // settings object
  
  settings = new settings(50,51);

  // players initialisation
  players = [];

  // main screen ui
  ui_title_screen();
}

function draw() {

}



// Display functions
function ui_easy_question() {

}

function ui_medium_question() {

}

function ui_hard_question() {

}
