function answer_verification(){
    removeElements();
    if (isCorrect == 1) {
        switch (difficulty){
            case 0:
                players[player_index].move_case(1);
                break;
            case 1:
                players[player_index].move_case(2);
                break;
            case 2:
                players[player_index].move_case(4);
                break;
        }

        playerCard(player_index,'center');
    }
    else if (isCorrect == 0){
        playerCard(player_index,'center');
    }
    if (players[player_index].player_case>=settings.number_of_cases){
        myTimeout =setTimeout(winner,2000);
    }else{
        myTimeout =setTimeout(nextplayer,2000);
    }

}

function nextplayer (){
    player_index = player_index + 1;
    if (player_index == players.length) {
        player_index = 0;
    }
    ui_chose_difficulty(player_index);
}

function winner (){
    removeElements();
    text_winner = createElement('h2', 'the winner is :'+ players[player_index].player_name +' with a score of :'+players[player_index].player_case );
    text_winner.style('text-align', CENTER).style('transform', 'translate(-50%)').position(windowWidth / 2, windowHeight / 2 + 50).style('color', '#ffffff');
    playerCard(player_index,'center');
    myTimeout = setTimeout(ui_title_screen,2000);
    
}

function ButtonisCorrect(Object,ii){
    if (Object.elt.innerText === case_question["correct_answer"]) {
        object = Object.style('background-color','#00d900');
        object = object.attribute('disabled','disabled');
        correct_button_index = ii;
        return object,correct_button_index;
    } else if (Object.elt.innerText != case_question["correct_answer"]) {
        object = Object.style('background-color','#ff4400');
        object = object.attribute('disabled','disabled');
        return object;
    }
}