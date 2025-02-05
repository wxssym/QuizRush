//game initialization
function initGame() {
  total_players = players_names_list.length;
    if (total_players==0) {
      alert('There is no players added yet');
    } 
    else if (total_players>0){
      player_index = 0;
      current_case_num = 0;
      plateau_setup(settings.number_of_cases, settings.game_categories.length);
      ui_chose_difficulty(player_index);
    }
  };


  function plateau_setup(plateau_size, number_of_themes) {
    cases_themes_ids = new Array(plateau_size);
    cases_themes_names = new Array(plateau_size);
    for (let ii = 0; ii < settings.game_categories.length; ii++) {
      cases_themes_ids[ii]= settings.game_categories[floor(random(0, number_of_themes))];
    };
  };