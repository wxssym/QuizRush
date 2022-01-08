async function ui_easy_question() {
    difficulty = 0;
    case_question = await Question(players[player_index].player_case,0);
    removeElements();
    playerCard(player_index,'bottom');
    div_main_menu = createDiv().id("easy_div").class("easy_div_style").parent("main");
    text_Question = createP('...').parent('easy_div').class('questions_style');
    text_Question.html(await case_question["question"]).parent('easy_div').class('questions_style');
    button_E_answer = [];
    div_addplayer = createDiv().id("easy_buttons_div").class("easy_buttons_div").parent("easy_div");
    button_E_answer[0] = createButton('True').parent('easy_buttons_div').class('easy_true_false_buttons_style');
    button_E_answer[0].mouseClicked(easy_answer0_selected);
    button_E_answer[1] = createButton('False').parent('easy_buttons_div').class('easy_true_false_buttons_style');
    button_E_answer[1].mouseClicked(easy_answer1_selected);
}

function easy_answer0_selected(){
    for (let ii=0; ii<2; ii++){
        ButtonisCorrect(button_E_answer[ii],ii);
    }
    if (correct_button_index == 0){
        isCorrect = 1;
        sound_correct.play();
    } else{
        isCorrect = 0;
        sound_wrong.play();

    }
    myTimeout =setTimeout(answer_verification,1000);
}


function easy_answer1_selected(){
    for (let ii=0; ii<2; ii++){
        ButtonisCorrect(button_E_answer[ii],ii);
    }
    if (correct_button_index == 1){
        isCorrect = 1;
        sound_correct.play();
    } else{
        isCorrect = 0;
        sound_wrong.play();
    }
    myTimeout =setTimeout(answer_verification,1000);
}
