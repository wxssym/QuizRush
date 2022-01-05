function ui_add_players() {
  //textbox
  removeElements();
  inputbox_addplayer = createInput();
  inputbox_addplayer.position(windowWidth / 2 - inputbox_addplayer.width / 2, windowHeight / 2);
  inputbox_addplayer.attribute('placeholder', '...');

  //buttons
  button_start = createButton('start game').position(windowWidth / 2, windowHeight / 2 + inputbox_addplayer.height + 15).mousePressed(initGame).class('buttons_style');
  button_addplayer = createButton('add player').position(windowWidth / 2 - button_start.width, windowHeight / 2 + inputbox_addplayer.height + 15).mousePressed(addPlayer).class('buttons_style');

  //texts
  text_EnterPlayersNames = createElement('h3', 'Enter players names').style('text-align', CENTER).style('transform', 'translate(-50%)').position(windowWidth / 2, windowHeight / 2 - 50).style('color', '#ffffff');
  text_PlayersList = createP('no one added yet').style('text-align', CENTER).style('transform', 'translate(-50%)').position(windowWidth / 2, windowHeight / 2 + 60).style('color', '#ffffff');
  updatePlayersList();


}

// function that shows or hides the players
function RemovePlayersBoutton(input) {
  this.input = input;
  if (input == 'show') {
    button_removePlayer = createButton('remove player').style('transform', 'translate(-50%,-50%)').class('buttons_style');
    button_removePlayer.position(windowWidth / 2, windowHeight / 2 + 200).mousePressed(ui_remove_player);
  } 
  else if (input == 'hide') {
    if (typeof button_removePlayer != 'undefined') {
      button_removePlayer.remove();
    }
  }
};