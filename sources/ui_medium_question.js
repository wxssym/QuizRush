async function ui_medium_question() {
    difficulty = 1;
    case_question = await Question(players[player_index].player_case,1);
    removeElements();
    isCorrect = NaN;
    correct_button_index = NaN;
    playerCard(player_index,'bottom');
    div_main_menu = createDiv().id("medium_div").class("medium_div_style").parent("main");
    text_Question = createP('...').parent('medium_div').class('questions_style');
    text_Question.html(await case_question["question"]).parent('medium_div').class('questions_style');
    buttons_medium();
    button_M_answer = [];
    div_addplayer = createDiv().id("medium_buttons_div").class("medium_buttons_div_style").parent("medium_div");
    button_M_answer[0] = createButton(buttons_answers[0]).parent('medium_buttons_div').class('medium_buttons_style');
    button_M_answer[0].mouseClicked(medium_answer0_selected);
    button_M_answer[1] = createButton(buttons_answers[1]).parent('medium_buttons_div').class('medium_buttons_style');
    button_M_answer[1].mouseClicked(medium_answer1_selected);
    button_M_answer[2]= createButton(buttons_answers[2]).parent('medium_buttons_div').class('medium_buttons_style');
    button_M_answer[2].mouseClicked(medium_answer2_selected);
    button_M_answer[3]= createButton(buttons_answers[3]).parent('medium_buttons_div').class('medium_buttons_style');
    button_M_answer[3].mouseClicked(medium_answer3_selected);

}

function medium_answer0_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
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

function medium_answer1_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
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

function medium_answer2_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
    }
    if (correct_button_index == 2){
        isCorrect = 1;
        sound_correct.play();
    } else{
        isCorrect = 0;
        sound_wrong.play();
    }
    myTimeout =setTimeout(answer_verification,1000);
}

function medium_answer3_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
    }
    if (correct_button_index == 3){
        isCorrect = 1;
        sound_correct.play();
    } else{
        isCorrect = 0;
        sound_wrong.play();
    }
    myTimeout = setTimeout(answer_verification,1000);
}





function buttons_medium(){
    available_Answers = case_question["incorrect_answers"];
    buttons_answers = [0,0,0,0];
    available_pos = [0,1,2,3];
    for (let ii=0;ii<4;ii++){
        chosed_answer = available_Answers[Math.floor(Math.random() * available_Answers.length)];
        chosed_pos = available_pos[Math.floor(Math.random()* available_pos.length)];
        buttons_answers[chosed_pos] =  chosed_answer;
        available_Answers.splice(available_Answers.indexOf(chosed_answer),1);
        available_pos.splice(available_pos.indexOf(chosed_pos),1);
    }

    for (let jj=0;jj<4;jj++){
        if ( typeof buttons_answers[jj] == 'undefined'){
            buttons_answers[jj] = case_question["correct_answer"];
        }
    }
};



