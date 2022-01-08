//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
  sound_correct = loadSound('assets/correct.mp3');
  sound_wrong = loadSound('assets/wrong.mp3');
}

function setup() {
  // settings object
  settings = new settings();

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
