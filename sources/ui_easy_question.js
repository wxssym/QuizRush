async function ui_easy_question() {
    difficulty = 0;
    case_question = await Question(players[player_index].player_case,0);
    removeElements();
    playerCard(player_index,'bottom');
    text_Question = createP('...').style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 -50).style('color', '#ffffff');
    text_Question.html(await case_question["question"]).style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 -50).style('color', '#ffffff');
    button_E_answer = [];
    button_E_answer[0] = createButton('True').style('transform', 'translate(-100%,+50%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2);
    button_E_answer[0].mouseClicked(easy_answer0_selected);
    button_E_answer[1] = createButton('False').style('transform', 'translate(0%,+50%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2);
    button_E_answer[1].mouseClicked(easy_answer1_selected);
}

function easy_answer0_selected(){
    for (let ii=0; ii<2; ii++){
        ButtonisCorrect(button_E_answer[ii],ii);
    }
    if (correct_button_index == 0){
        isCorrect = 1;
    } else{
        isCorrect = 0;
    }
    myTimeout =setTimeout(answer_verification,1000);
}


function easy_answer1_selected(){
    for (let ii=0; ii<2; ii++){
        ButtonisCorrect(button_E_answer[ii],ii);
    }
    if (correct_button_index == 1){
        isCorrect = 1;
    } else{
        isCorrect = 0;
    }
    myTimeout =setTimeout(answer_verification,1000);
}
