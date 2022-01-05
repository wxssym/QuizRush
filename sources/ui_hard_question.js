async function ui_hard_question() {
    difficulty = 2;
    case_question = await Question(players[player_index].player_case,2);
    removeElements();
    playerCard(player_index,'bottom');
    text_Question = createP('...').style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 -50).style('color', '#ffffff');
    text_Question.html(await case_question["question"]).style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 -50).style('color', '#ffffff');
    inputbox_HardAnswer = createInput();
    inputbox_HardAnswer.position(windowWidth / 2 - inputbox_HardAnswer.width / 2, windowHeight / 2);
    inputbox_HardAnswer.attribute('placeholder', 'Enter your answer here');
    button_submit = createButton('SUBMIT').style('transform', 'translate(-50%,+50%)').position(windowWidth / 2, windowHeight / 2 + 15).class('buttons_style');
    button_submit.mouseClicked(hard_answer_submited);
}

function hard_answer_submited(){
    correct_words = 0;
    player_hard_answer = [];
    player_hard_answer = inputbox_HardAnswer.value().split(' ');
    correct_hard_answer = case_question["correct_answer"].split(' ');
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
        inputbox_HardAnswer = createP('<b>CORRECT: ' + case_question["correct_answer"]+'</b>').style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').style('color', '#00d900').class('buttons_style');
        inputbox_HardAnswer.position(windowWidth / 2 , windowHeight / 2);

    } else {
        isCorrect = 0;
        inputbox_HardAnswer.remove();
        button_submit.remove();
        inputbox_HardAnswer = createP('<b>FALSE: ' + case_question["correct_answer"]+'</b>').style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').style('color', '#ff4400').class('buttons_style');
        inputbox_HardAnswer.position(windowWidth / 2 , windowHeight / 2);
    };
    myTimeout =setTimeout(answer_verification,2000);
}







