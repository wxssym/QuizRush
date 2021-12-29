  function title_screen_ui(){
    createCanvas(windowWidth, windowHeight)
    background(51);
    players_list = '<b>Players in the lobby :</b>';
    //noCanvas();
    image(quiz_rush_logo, windowWidth/2 - quiz_rush_logo.width/2, 0);

    //textbox
    add_player_inputbox = createInput();
    add_player_inputbox.position(windowWidth/2 - add_player_inputbox.width/2, windowHeight/2);
    add_player_inputbox.attribute('placeholder', '...');

    //buttons
    button_start = createButton('start game').position(windowWidth/2 , windowHeight/2 + add_player_inputbox.height+15).mousePressed(initgame);
    button_addplayer = createButton('add player').position(windowWidth/2-button_start.width, windowHeight/2 + add_player_inputbox.height+15).mousePressed(addplayer);

    //texts
    T_EnterPlayersNames = createElement('h3','Enter players names').style('text-align',CENTER).style('transform','translate(-50%)').position(windowWidth/2 , windowHeight/2-50).style('color', '#ffffff');
    T_ListPlayers = createP('no one added yet').style('text-align',CENTER).style('transform','translate(-50%)').position(windowWidth/2 , windowHeight/2+60).style('color', '#ffffff');
  }

  function addplayer(){
    if (add_player_inputbox.value().length < 2 || add_player_inputbox.value().includes("  ")){
      console.log('write a name in the box');
    } else {
      players.push(new player(add_player_inputbox.value()));

      T_ListPlayers.html(players_list = players_list+'<br>'+add_player_inputbox.value());
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
