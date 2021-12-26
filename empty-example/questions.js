function case_question_setup(current_case_num,question_difficulty) {
    case_theme = cases_themes_ids [current_case_num];
    switch (question_difficulty){
      case 0:
        theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
        theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
        random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
        case_question = random_case_theme_difficulty_question.getChildren()[0].getContent();
        case_answer1 = random_case_theme_difficulty_question.getChildren()[1].getContent();
        case_answer2 = random_case_theme_difficulty_question.getChildren()[2].getContent();
        case_correct = random_case_theme_difficulty_question.getChildren()[3].getContent();
        console.log('question theme is :'+cases_themes_text[current_case_num]+'the difficulty is :'+difficulty_text[question_difficulty]+';the question is :'+case_question+'the answer is :'+case_correct);
        break;

      case 1:
        theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
        theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
        random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
        case_question = random_case_theme_difficulty_question.getChildren()[0].getContent();
        case_answer1 = random_case_theme_difficulty_question.getChildren()[1].getContent();
        case_answer2 = random_case_theme_difficulty_question.getChildren()[2].getContent();
        case_answer3 = random_case_theme_difficulty_question.getChildren()[3].getContent();
        case_answer4 = random_case_theme_difficulty_question.getChildren()[4].getContent();
        case_correct = random_case_theme_difficulty_question.getChildren()[5].getContent();
        console.log('question theme is :'+cases_themes_text[current_case_num]+'the difficulty is :'+difficulty_text[question_difficulty]+';the question is :'+case_question+'the answer is :'+case_correct);
        break;
      case 2:
        theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
        theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
        random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
        case_question = random_case_theme_difficulty_question.getChildren()[0].getContent();
        case_correct = random_case_theme_difficulty_question.getChildren()[1].getContent();
        console.log('question theme is :'+cases_themes_text[current_case_num]+'the difficulty is :'+difficulty_text[question_difficulty]+';the question is :'+case_question+'the answer is :'+case_correct);
        break;
      case 3:
        console.log('this difficulty level do not exist');
        break;
    }
  };
  

  
