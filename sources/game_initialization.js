//game initialization
function initGame() {
  total_players = players_names_list.length;
    if (total_players > 1) {
      current_case_num = 0;
      plateau_setup(settings.number_of_cases, 3);
      ui_chose_difficulty ();
    } else if(total_players==0) {
      text_EnterPlayersNames.html('0 players in party');
    } else if (total_players==1){
      player_index = 0;
      current_case_num = 0;
      plateau_setup(settings.number_of_cases, 3);
      ui_chose_difficulty(player_index);
    }
  };