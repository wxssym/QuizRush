function ui_chose_difficulty(player_index) {
    removeElements();
    text_theme_Announcement = createP('<b>'+players[player_index].player_name + ' your question theme is '+cases_themes_text[cases_themes_ids[players[player_index].player_case]]+'</b>' ).style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 - 50).style('color', '#ffffff');
    playerCard(player_index);
    difficulty_selector();
}

function difficulty_selector(){
  selector_difficulty = createSelect().style('transform', 'translate(-50%,-50%)');
  selector_difficulty.option('select the difficulty');
  selector_difficulty.option('easy');
  selector_difficulty.option('medium');
  selector_difficulty.option('hard');
  selector_difficulty.position(windowWidth/2 , windowHeight/2);
  selector_difficulty.changed(selector_difficulty_Onchange);
}

function playerCard(player_index){
  player_avatar = players[player_index].player_icon();
  text_player_card_name = createP(players[player_index].player_name).style('transform', 'translate(-50%,-50%)').style('color', '#ffffff');
  text_player_card_name.position(windowWidth/2, windowHeight/2 + 220);
  text_player_current_case = createP(players[player_index].player_case).style('transform', 'translate(-50%,-50%)').style('color', '#ffffff');
  text_player_current_case.position(windowWidth/2, windowHeight/2 + 220 + text_player_card_name.height);
};