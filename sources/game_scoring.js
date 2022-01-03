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
    myTimeout =setTimeout(nextplayer,2000);
}

function nextplayer (){
    player_index = player_index + 1;
    if (player_index == players.length) {
        player_index = 0;
    }
    ui_chose_difficulty(player_index);
}