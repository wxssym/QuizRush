async function ui_medium_question() {
    difficulty = 1;
    case_question = await Question(players[player_index].player_case,1);
    removeElements();
    isCorrect = NaN;
    correct_button_index = NaN;
    playerCard(player_index,'bottom');
    text_Question = createP('...').style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2).style('color', '#ffffff');
    text_Question.html(await case_question["question"]).style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 -50).style('color', '#ffffff');
    buttons_medium();
    button_M_answer = [];
    button_M_answer[0] = createButton(buttons_answers[0]).style('transform', 'translate(-100%,+50%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2).class('buttons_style');
    button_M_answer[0].mouseClicked(medium_answer0_selected);
    button_M_answer[1] = createButton(buttons_answers[1]).style('transform', 'translate(0%,+50%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2).class('buttons_style');
    button_M_answer[1].mouseClicked(medium_answer1_selected);
    button_M_answer[2]= createButton(buttons_answers[2]).style('transform', 'translate(-100%,+150%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2).class('buttons_style');
    button_M_answer[2].mouseClicked(medium_answer2_selected);
    button_M_answer[3]= createButton(buttons_answers[3]).style('transform', 'translate(0%,+150%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2).class('buttons_style');
    button_M_answer[3].mouseClicked(medium_answer3_selected);

}

function medium_answer0_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
    }
    if (correct_button_index == 0){
        isCorrect = 1;
    } else{
        isCorrect = 0;
    }
    myTimeout =setTimeout(answer_verification,1000);
}

function medium_answer1_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
    }
    if (correct_button_index == 1){
        isCorrect = 1;
    } else{
        isCorrect = 0;  
    }
    myTimeout =setTimeout(answer_verification,1000);
}

function medium_answer2_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
    }
    if (correct_button_index == 2){
        isCorrect = 1;
    } else{
        isCorrect = 0;
    }
    myTimeout =setTimeout(answer_verification,1000);
}

function medium_answer3_selected(){
    for (let ii=0; ii<4; ii++){
        ButtonisCorrect(button_M_answer[ii],ii);
    }
    if (correct_button_index == 3){
        isCorrect = 1;
    } else{
        isCorrect = 0;
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



