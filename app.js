//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
  quiz_rush_logo = loadImage('assets/logo.png');
}

function setup() {
  // settings object
  
  settings = new settings(20,51);

  // players initialisation
  players = [];

  // main screen ui
  ui_title_screen();
}

function draw() {

}



// Display functions
function ui_easy_question() {
    console.log('easy is selected');
}

function ui_medium_question() {
  console.log('medium is selected');
}

function ui_hard_question() {
  console.log('hard is selected');
}
