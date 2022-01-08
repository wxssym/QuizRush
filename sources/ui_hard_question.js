async function ui_hard_question() {
    difficulty = 2;
    case_question = await Question(players[player_index].player_case,2);
    removeElements();
    playerCard(player_index,'bottom');
    div_main_menu = createDiv().id("hard_div").class("hard_div_style").parent("main");
    text_Question = createP('...').parent('hard_div').class('questions_style');;
    text_Question.html(await case_question["question"]).parent('hard_div').class('questions_style');;
    inputbox_HardAnswer = createInput();
    inputbox_HardAnswer.parent('hard_div').class('textBox');
    inputbox_HardAnswer.attribute('placeholder', 'Enter your answer here');
    button_submit = createButton('SUBMIT').parent('hard_div').class('buttons');
    button_submit.mouseClicked(hard_answer_submited);
}

function hard_answer_submited(){
    correct_words = 0;
    player_hard_answer = [];
    player_hard_answer = inputbox_HardAnswer.value().toUpperCase().split(' ');
    correct_hard_answer = case_question["correct_answer"].toUpperCase().split(' ');
    for (let ii=0 ; ii < player_hard_answer.length ; ii++)
    {
        if (correct_hard_answer.includes(player_hard_answer[ii])){
            correct_words = correct_words + 1;
        }
    };
    if (correct_words > 0){
        isCorrect = 1;
        inputbox_HardAnswer.remove();
        button_submit.remove();
        inputbox_HardAnswer = createP('<b>CORRECT: ' + case_question["correct_answer"]+'</b>').parent('hard_div').class('hard_correct_answer_style');

    } else {
        isCorrect = 0;
        inputbox_HardAnswer.remove();
        button_submit.remove();
        inputbox_HardAnswer = createP('<b>FALSE: ' + case_question["correct_answer"]+'</b>').parent('hard_div').class('hard_wrong_answer_style');
    };
    myTimeout =setTimeout(answer_verification,2000);
}







