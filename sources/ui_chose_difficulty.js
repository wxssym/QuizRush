function ui_chose_difficulty(player_index) {
    removeElements();
    div_select_diff = createDiv().id("select_diff_div").class('select_diff_div_style').parent("main");
    text_theme_Announcement = createP('<span class="text_orange">'+players[player_index].player_name.toUpperCase() +'</span>'+ ' your question theme is <span class="text_orange">'+cases_themes_ids[players[player_index].player_case].name+'</span>' ).class('div_addplayer_text_style').parent('select_diff_div');
    playerCard(player_index,'bottom');
    difficulty_selector();
}

function difficulty_selector(){
  
  selector_difficulty = createSelect().parent('select_diff_div').class('dropDown');
  selector_difficulty.option('select the difficulty');
  selector_difficulty.option('easy');
  selector_difficulty.option('medium');
  selector_difficulty.option('hard');
  selector_difficulty.changed(selector_difficulty_Onchange);
}

