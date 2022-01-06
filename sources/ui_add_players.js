function ui_add_players() {
  //textbox
  removeElements();
  div_addplayer = createDiv().id("div_addplayer").class("div_addplayer_style").parent("main");

  text_EnterPlayersNames = createP('Enter players names').class('players_list').parent('div_addplayer');
  inputbox_addplayer = createInput().parent('div_addplayer').class('textBox');
  inputbox_addplayer.attribute('placeholder', '...');

  //buttons div
  div_addplayer = createDiv().id("div_addplayer_buttons").class("div_addplayer_buttons").parent("div_addplayer");
  //add start buttons
  button_addplayer = createButton('add player').parent('div_addplayer_buttons').mousePressed(addPlayer).class('buttons');
  button_start = createButton('start game').parent('div_addplayer_buttons').mousePressed(initGame).class('buttons');


  //texts
  text_PlayersList = createP('no one added yet').class('players_list').parent('div_addplayer').class('players_list');
  updatePlayersList();


}

// function that shows or hides the players
function RemovePlayersBoutton(input) {
  this.input = input;
  if (input == 'show') {
    button_removePlayer = createButton('remove player').style('transform', 'translate(-50%,-50%)').class('buttons');
    button_removePlayer.position(windowWidth / 2, windowHeight / 2 + 200).mousePressed(ui_remove_player);
  } 
  else if (input == 'hide') {
    if (typeof button_removePlayer != 'undefined') {
      button_removePlayer.remove();
    }
  }
};