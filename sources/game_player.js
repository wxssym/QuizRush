players_names_list = [];
function player(name) {
    this.player_name = name;
    this.player_case = 0;

    this.move_case = function (points) {
        this.player_case = this.player_case + points;
    };

    this.player_icon = function (image_position){
      if(image_position=='center'){
        this.IconUrl = 'https://avatars.dicebear.com/api/croodles-neutral/'+this.player_name+'.svg?size=50&background=%23ffea00';
        this.img_playerIcon = createImg(this.IconUrl,this.player_name+' icon').style('transform', 'translate(-50%,-50%)').class('buttons_style');
        this.img_playerIcon.position(windowWidth/2, windowHeight/2 -20).class('buttons_style');
      }
      else{
        this.IconUrl = 'https://avatars.dicebear.com/api/croodles-neutral/'+this.player_name+'.svg?size=50&background=%23ffea00';
        this.img_playerIcon = createImg(this.IconUrl,this.player_name+' icon').style('transform', 'translate(-50%,-50%)').class('buttons_style');
        this.img_playerIcon.position(windowWidth/2, windowHeight/2 + 200).class('buttons_style');
      }

    }
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
        text_EnterPlayersNames.html('Ready to start').class('players_list');
    }
    inputbox_addplayer.value('');

};


//function that updates the player list
function updatePlayersList() {
    temp = '';
    if (players.length > 0) {
      for (ii = 0; ii < players.length; ii++) {
        temp = temp + 'P' + (ii + 1).toString() + ':' + players_names_list[ii] + '<br>';
        text_EnterPlayersNames.html('Ready to start').class('players_list');
        text_PlayersList.html('<b>Players in the lobby :</b>' + '<br>' + temp).class('players_list');
      }
      RemovePlayersBoutton('show');
    }
    else {
      RemovePlayersBoutton('hide');
      text_PlayersList.html('no one added yet').class('players_list');
      text_EnterPlayersNames.html('Enter players names').class('players_list');
    }
  };


  function playerCard(player_index,card_position){
    if (card_position == 'center'){
      player_avatar = players[player_index].player_icon('center');
      text_player_card_name = createP('<b>'+players[player_index].player_name+'</b>').style('transform', 'translate(-50%,-50%)').style('color', '#ffffff');
      text_player_card_name.position(windowWidth/2, windowHeight/2).class('buttons_style');
      text_player_current_case = createP('CURRENT CASE: '+players[player_index].player_case).style('transform', 'translate(-50%,-50%)').style('color', '#ffffff');
      text_player_current_case.position(windowWidth/2, windowHeight/2 + text_player_card_name.height).class('buttons_style');
    }
    else if (card_position == 'bottom'){
      player_avatar = players[player_index].player_icon('bottom');
      text_player_card_name = createP('<b>'+players[player_index].player_name+'</b>').style('transform', 'translate(-50%,-50%)').style('color', '#ffffff');
      text_player_card_name.position(windowWidth/2, windowHeight/2 + 220);
      text_player_current_case = createP('CASE: '+players[player_index].player_case).style('transform', 'translate(-50%,-50%)').style('color', '#ffffff');
      text_player_current_case.position(windowWidth/2, windowHeight/2 + 220 + text_player_card_name.height);
    }
  };
  