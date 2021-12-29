  function title_screen_ui(){
    createCanvas(windowWidth, windowHeight)
    background(51);
    //noCanvas();
    image(quiz_rush_logo, windowWidth/2 - quiz_rush_logo.width/2, 0);

    //let P_EnterPlayersNames = createP('Enter players names');

    add_player_inputbox = createInput();
    add_player_inputbox.position(windowWidth/2 - add_player_inputbox.width/2, windowHeight/2);
    add_player_inputbox.attribute('placeholder', 'Name of the players');

  
    button_start = createButton('start game').position(windowWidth/2 , windowHeight/2 + add_player_inputbox.height+15).mousePressed(initgame);
    button_addplayer = createButton('add player').position(windowWidth/2-button_start.width, windowHeight/2 + add_player_inputbox.height+15).mousePressed(addplayer);

    //T_EnterPlayersNames = createElement('h5','Enter players names').position(0 , 0).style('text-align',CENTER).style('padding',50).id('text');

  }

  function addplayer(){
    if (add_player_inputbox.value().length < 2 || add_player_inputbox.value().includes("  ")){
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

function windowResized() {
  centerCanvas();
}