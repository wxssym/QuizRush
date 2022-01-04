function ui_chose_difficulty(player_index) {
    removeElements();
    text_theme_Announcement = createP('<b>'+players[player_index].player_name + ' your question theme is '+cases_themes_ids[players[player_index].player_case].name+'</b>' ).style('text-align', CENTER).style('transform', 'translate(-50%,-50%)').position(windowWidth / 2, windowHeight / 2 - 50).style('color', '#ffffff');
    playerCard(player_index,'bottom');
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

