players_names_list = [];
function player(name) {
    this.player_name = name;
    this.player_case = 0;
    this.AvatarUrl = 'https://api.dicebear.com/9.x/notionists/svg?seed='+this.player_name+'&size=80&backgroundColor=b6e3f4,c0aede,d1d4f9'
    
    this.move_case = function (points) {
        this.player_case = this.player_case + points;
    };
}

function addPlayer() {
    if (inputbox_addplayer.value().length < 2 || inputbox_addplayer.value().includes("  ")) {
        alert('Pro tip: enter something before')
    }
    else {
        players.push(new player(inputbox_addplayer.value()));
        players_names_list.push(inputbox_addplayer.value());

        players_list_title = '<b>Players in the lobby :</b>';
        updatePlayersList();
        text_EnterPlayersNames.html('Ready to start').class('div_addplayer_text_style');
    }
    inputbox_addplayer.value('');

};


//function that updates the player list
function updatePlayersList() {
    temp = '';
    if (players.length > 0) {
      for (ii = 0; ii < players.length; ii++) {
        temp = temp + 'P' + (ii + 1).toString() + ':' + players_names_list[ii] + '<br>';
        text_EnterPlayersNames.html('Ready to start').class('div_addplayer_text_style');
        text_PlayersList.html('<b>Players in the lobby :</b>' + '<br>' + temp).class('div_addedplayers_list_style');
      }
      RemovePlayersBoutton('show');
    }
    else {
      RemovePlayersBoutton('hide');
      text_PlayersList.html('no one added yet').class('div_addedplayers_list_style');
      text_EnterPlayersNames.html('Enter players names').class('div_addplayer_text_style');
    }
  };


  function playerCard(player_index,card_position){
    if (card_position == 'center'){
      div_player_card = createDiv().id("player_card_mid").class("player_card_mid_style").parent("main");
      player_avatar = players[player_index].AvatarUrl;
      img_player_card_avatar = createImg(player_avatar,players[player_index].player_name).parent('player_card_mid').class('avatar');
      div_player_card_text = createDiv().id("player_card_mid_text").class("player_card_mid_text_style").parent("player_card_mid");
      text_player_card_name = createP('<b>'+players[player_index].player_name+'</b>').parent('player_card_mid_text').class('text_style_mid');
      text_player_current_case = createP('<b>You are at :</b> '+players[player_index].player_case +'/'+settings.number_of_cases).parent('player_card_mid_text').class('text_style_mid');
    }
    else if (card_position == 'bottom'){
      div_main_menu = createDiv().id("player_card_bot").class("player_card_bot_style").parent("main");
      player_avatar = players[player_index].AvatarUrl;
      img_player_card_avatar = createImg(player_avatar,players[player_index].player_name).parent('player_card_bot').class('avatar');
      div_player_card_text = createDiv().id("player_card_bot_text").class("player_card_bot_text_style").parent("player_card_bot");
      text_player_card_name = createP('<b>Current player:</b> '+players[player_index].player_name).parent('player_card_bot_text').class('text_style_bot');
      text_player_current_case = createP('<b>Score :</b> '+players[player_index].player_case +'/'+settings.number_of_cases).parent('player_card_bot_text').class('text_style_bot');
    }
  };
  
