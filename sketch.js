//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
  quiz_rush_logo = loadImage('assets/logo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(51);
  players = [];
  current_case_num = 0;

  plateau_setup = new plateau_setup(50, 3);
  ui_title_screen();
}

function draw() {

}

function plateau_setup(plateau_size, number_of_themes) {
  cases_themes_ids = new Array(plateau_size);
  for (let ii = 0; ii < cases_themes_ids.length; ii++) {
    cases_themes_ids[ii] = floor(random(0, number_of_themes));
  };
};

// Display functions
function ui_easy_question() {

}

function ui_medium_question() {

}

function ui_hard_question() {

}

function ui_chose_difficulty() {
  removeElements();
}

/* function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} */