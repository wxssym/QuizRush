function ui_chose_difficulty(player_index) {
    removeElements();
    textFont(quiz_rush_font);
    text_theme_Announcement = createP('<b>'+players[player_index].player_name + ' your question theme is '+cases_themes_text[cases_themes_ids[players[player_index].player_case]]+'</b>' ).style('text-align', CENTER).style('transform', 'translate(-50%)').position(windowWidth / 2, windowHeight / 2 - 50).style('color', '#ffffff');
    difficulty_selector();



}




function difficulty_selector(){
  selector_difficulty = createSelect();
  selector_difficulty.option('select the difficulty');
  selector_difficulty.option('easy');
  selector_difficulty.option('medium');
  selector_difficulty.option('hard');
  selector_difficulty.position(windowWidth/2 - selector_difficulty.width -40 , windowHeight/2 + 20);
}