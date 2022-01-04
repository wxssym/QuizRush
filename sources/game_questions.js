async function Question (case_number,selected_difficulty){
    QuestionTypes = ['boolean', 'multiple','multiple'];
    QuestionAmount = 5;
    if (selected_difficulty==0){
        QuestionAmount=1;
    };
    console.log('Question amount:'+QuestionAmount);
    QuestionUrl = 'https://opentdb.com/api.php?amount='+QuestionAmount.toString()+'&category='+cases_themes_ids[case_number].id.toString()+'&type='+QuestionTypes[selected_difficulty];
    case_question_query = await fetch(QuestionUrl);
    case_question_response = await case_question_query.json();
    console.log('API response :' + await case_question_response["response_code"])
    case_question = await case_question_response["results"][floor(random(0,QuestionAmount.toString()))];
    return await case_question;
}
