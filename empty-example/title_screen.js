  function title_screen_ui(){
    createCanvas(windowWidth, windowHeight)
    screenratio=windowWidth/windowHeight;
    background(51);
    image(quiz_rush_logo, windowWidth/2 - quiz_rush_logo.width/2, 0);
    add_player_inputbox = createInput();
    add_player_inputbox.position(windowWidth/2 - add_player_inputbox.width/2, windowHeight/2);
  
    button_addplayer = createButton('add player');
    button_addplayer.position(windowWidth/2-button_addplayer.width, windowHeight/2 + add_player_inputbox.height+15);
    button_addplayer.mousePressed(addplayer);
  
    button_start = createButton('start game');
    button_start.position(windowWidth/2 , windowHeight/2 + add_player_inputbox.height+15);
    button_start.mousePressed(initgame);
  }

  function addplayer(){
    if (add_player_inputbox.value() == ''){
      console.log('write a name in the box');
    } else {
      players.push(new player(add_player_inputbox.value()));
      add_player_inputbox.value('');
    }
  }

function initgame(){
  player_count = players.length;
  if (player_count>0){

  }else{
    console.log('not enough players');
  }
}
