function case_question_setup(current_case_num,question_difficulty) {
    case_theme = cases_themes_ids [current_case_num];
    question_elements = [];
    switch (question_difficulty){
      case 0:
        theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
        theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
        random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
        for (let ii=0; ii<4;ii++) {
          question_elements [ii] = random_case_theme_difficulty_question.getChildren()[ii].getContent();
        };
        console.log('question theme is :'+cases_themes_text[current_case_num]+'the difficulty is :'+difficulty_text[question_difficulty]+';the question is :'+question_elements[0]+'the answer is :'+question_elements[3]);
        return question_elements;

      case 1:
        theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
        theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
        random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
        for (let ii=0; ii<6;ii++) {
          question_elements [ii] = random_case_theme_difficulty_question.getChildren()[ii].getContent();
        };
        console.log('question theme is :'+cases_themes_text[current_case_num]+'the difficulty is :'+difficulty_text[question_difficulty]+';the question is :'+question_elements[0]+'the answer is :'+question_elements[5]);
        return question_elements;

      case 2:
        theme_difficulty_questions = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren();
        theme_difficulty_questions_lenght = questionsDB.getChildren()[case_theme].getChildren()[question_difficulty].getChildren().length;
        random_case_theme_difficulty_question = theme_difficulty_questions[floor(random(0,theme_difficulty_questions_lenght))];
        for (let ii=0; ii<2;ii++) {
          question_elements [ii] = random_case_theme_difficulty_question.getChildren()[ii].getContent();
        };
        console.log('question theme is :'+cases_themes_text[current_case_num]+'the difficulty is :'+difficulty_text[question_difficulty]+';the question is :'+question_elements[0]+'the answer is :'+question_elements[1]);
        return question_elements;

      case 3:
        console.log('this difficulty level do not exist');
        break;
        
    }
  };
  

  
