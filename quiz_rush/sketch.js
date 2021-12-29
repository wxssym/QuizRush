//Quiz rush
function preload() {
  questionsDB = loadXML('quiz_rush/database/questionsDB.xml');
  quiz_rush_logo = loadImage('quiz_rush/assets/logo.png');
}

function setup() {
  players = [];
  current_case_num = 0;

  plateau_setup = new plateau_setup(50,3);
  title_screen_ui();
}

function draw() {

}

function plateau_setup (plateau_size,number_of_themes) {
  cases_themes_ids = new Array(plateau_size);
  for (let ii = 0; ii < cases_themes_ids.length ; ii++) {
    cases_themes_ids [ii] = floor(random(0,number_of_themes));
  };
};

// Display functions
function easy_question_ui(){

}

function medium_question_ui(){
  
}

function hard_question_ui(){
  
}

function chose_difficulty_ui(){
  removeElements();
}