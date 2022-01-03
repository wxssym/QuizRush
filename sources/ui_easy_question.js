function ui_easy_question() {
    removeElements();
    question = case_question_setup(players[player_index].player_case,0);
    text_EnterPlayersNames = createElement('h3', question[0]+' ?').style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 -50).style('color', '#ffffff');
    button_answer1 = createButton(question[1]).style('transform', 'translate(-100%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2);
    button_answer1.mouseClicked(easy_answer1_selected);
    button_answer2 = createButton(question[2]).style('transform', 'translate(0%)').style('width','150px').style('height','50px').position(windowWidth / 2, windowHeight / 2);
    button_answer2.mouseClicked(easy_answer2_selected);
    playerCard(player_index,'bottom');
}

function easy_answer1_selected(){
    if (question[1] === question[3] ){ //correct
        button_answer1.style('background-color','green'); 
        button_answer1.attribute('disabled','disabled');
        button_answer2.style('background-color','red'); 
        button_answer2.attribute('disabled','disabled');
        isCorrect = 1;
        myTimeout =setTimeout(answer_verification,1000);
    }
    else if (question[1] != question[3]){
        button_answer1.style('background-color','red');
        button_answer1.attribute('disabled','disabled');
        button_answer2.style('background-color','green');
        button_answer2.attribute('disabled','disabled');
        isCorrect = 0;
        myTimeout =setTimeout(answer_verification,1000);
    }

}

function easy_answer2_selected(){
    if (question[2] === question[3] ){ //correct
        button_answer1.style('background-color','red'); 
        button_answer1.attribute('disabled','disabled');
        button_answer2.style('background-color','green');
        button_answer2.attribute('disabled','disabled');
        isCorrect = 1;
        myTimeout =setTimeout(answer_verification,1000);
    }
    else if (question[2] != question[3] ){ //false
        button_answer1.style('background-color','green');
        button_answer1.attribute('disabled','disabled');
        button_answer2.style('background-color','red');
        button_answer2.attribute('disabled','disabled');
        isCorrect = 0;
        myTimeout =setTimeout(answer_verification,1000);
    }
}