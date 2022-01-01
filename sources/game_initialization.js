//game initialization
function initGame() {
    if (players_names_list.length > 1) {
      alert('Multiplayer is not yet implemented');
    } else if(players_names_list.length==0) {
      alert('cant start a game with zero players');
      text_EnterPlayersNames.html('0 players in party');
    }
  };