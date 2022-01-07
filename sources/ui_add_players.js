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
  div_addedplayers = createDiv().id("div_addedplayers").class("div_addedplayers_list").parent("div_addplayer");
  text_PlayersList = createP('no one added yet').parent('div_addedplayers').class('players_list');

  button_removePlayer = createButton('remove player').parent('div_addplayer').class('buttons').mousePressed(ui_remove_player);
  updatePlayersList();

}

// function that shows or hides the players
function RemovePlayersBoutton(input) {
  this.input = input;
  if (input == 'show') {
    button_removePlayer.show();
  } 
  else if (input == 'hide') {
    if (typeof button_removePlayer != 'undefined') {
      button_removePlayer.hide();
    }
  }
};