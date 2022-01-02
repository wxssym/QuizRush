players_names_list = [];
function player(name) {
    this.player_name = name;
    this.player_score = 0;
    this.player_case = 0;

    this.add_score = function (points) {
        this.player_score = this.player_score + points;
        this.player_case = this.player_case + points;
    };
}

function addPlayer() {
    if (inputbox_addplayer.value().length < 2 || inputbox_addplayer.value().includes("  ")) {
        console.log('write a name in the box');
    } else {
        players.push(new player(inputbox_addplayer.value()));
        players_list_title = '<b>Players in the lobby :</b>';
        players_names_list.push(inputbox_addplayer.value());
        updatePlayersList();
        text_EnterPlayersNames.html('Ready to start');
        //alert(inputbox_addplayer.value()+' was added to the list');
    }
    inputbox_addplayer.value('');

};

function removePlayer() {

};

//function that updates the player list
function updatePlayersList() {
    temp = '';
    if (players_names_list.length > 0) {
      for (ii = 0; ii < players_names_list.length; ii++) {
        temp = temp + 'P' + (ii + 1).toString() + ':' + players_names_list[ii] + '<br>';
        text_EnterPlayersNames.html('Ready to start');
        text_PlayersList.html('<b>Players in the lobby :</b>' + '<br>' + temp);
      }
      RemovePlayersBoutton('show');
    } else {
      RemovePlayersBoutton('hide');
      text_PlayersList.html('no one added yet');
      text_EnterPlayersNames.html('Enter players names');
    }
  };