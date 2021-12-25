//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
  quiz_rush_logo = loadImage('assets/logo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)


  plateau_setup = new plateau_setup(50,3);
  current_case_num = 0;
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



function case_question_setup(current_case_num,question_difficulty) {
  case_theme = cases_themes_ids [current_case_num];
  if (question_difficulty == 0) 
  {
    theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
    theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
    random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
    case_question = random_case_theme_difficulty_question.getChildren()[0].getContent();
    case_answer1 = random_case_theme_difficulty_question.getChildren()[1].getContent();
    case_answer2 = random_case_theme_difficulty_question.getChildren()[2].getContent();
    case_correct = random_case_theme_difficulty_question.getChildren()[3].getContent();
  }
  else if (question_difficulty == 1) 
  {
    theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
    theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
    random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
    case_question = random_case_theme_difficulty_question.getChildren()[0].getContent();
    case_answer1 = random_case_theme_difficulty_question.getChildren()[1].getContent();
    case_answer2 = random_case_theme_difficulty_question.getChildren()[2].getContent();
    case_answer3 = random_case_theme_difficulty_question.getChildren()[3].getContent();
    case_answer4 = random_case_theme_difficulty_question.getChildren()[4].getContent();
    case_correct = random_case_theme_difficulty_question.getChildren()[5].getContent();
  }
  else if (question_difficulty == 2) 
  {
    theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
    theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
    random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
    case_question = random_case_theme_difficulty_question.getChildren()[0].getContent();
    case_correct = random_case_theme_difficulty_question.getChildren()[1].getContent();
  }
};

function easy_question_ui(){

}

function medium_question_ui(){
  
}

function hard_question_ui(){
  
}

function title_screen_ui(){
  createCanvas(windowWidth, windowHeight)
  screenratio=windowWidth/windowHeight;
  background(51);
  image(quiz_rush_logo, windowWidth/2 - quiz_rush_logo.width/2, 0);
  add_player_input = createInput();
  add_player_input.position(windowWidth/2 - add_player_input.width/2, windowHeight/2);

  button_addplayer = createButton('submit');
  button_addplayer.position(windowWidth/2 - button_addplayer.width/2, windowHeight/2 + add_player_input.height+15);
  
  textSize(32);
  A = text('Quiz rush ! dev 0.1',windowWidth/2,windowHeight/2);
}