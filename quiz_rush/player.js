players_names_list = [];
function player(name){
    this.player_name = name;
    this.player_score = 0;
    this.player_case = 0;

    this.add_score= function(points){
        this.player_score = this.player_score + points;
        this.player_case = this.player_case + points;
    };
}

function addplayer(){
    if (add_player_inputbox.value().length < 2 || add_player_inputbox.value().includes("  ")){
        console.log('write a name in the box');
    } else {
        players.push(new player(add_player_inputbox.value()));
        players_list_title = '<b>Players in the lobby :</b>';
        players_names_list.push(add_player_inputbox.value());
        updatePlayersList();
        T_EnterPlayersNames.html('Ready to start');

      }
      add_player_inputbox.value('');

  };

function removePlayer(){

};