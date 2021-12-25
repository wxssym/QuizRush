//Quiz rush
function preload() {
  questionsDB = loadXML('database/questionsDB.xml');
}





function setup() {
  createCanvas(windowWidth, windowHeight)
  plateau_setup = new plateau_setup(50,3);
  current_case_num = 0;


}






function draw() {
  background(51);
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