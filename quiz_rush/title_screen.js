  function title_screen_ui(){
    //canvas
    createCanvas(windowWidth, windowHeight)
    background(51);
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
    updatePlayersList();


  }



//game initialization
function initgame(){;
  if (players_names_list.length>0){

  }else{
    T_EnterPlayersNames.html('0 players in party');
  }
}

//function that updates the player list
function updatePlayersList(){
    temp = '';
    if (players_names_list.length>0 ) {
      for (ii=0; ii<players_names_list.length; ii++ )
      {
        temp = temp +'P'+ (ii+1).toString()+':'+players_names_list[ii]+'<br>';
        T_ListPlayers.html('<b>Players in the lobby :</b>'+'<br>'+temp);
      }
      RemovePlayersBoutton('show');
    }else{
      RemovePlayersBoutton('hide');
      T_ListPlayers.html('no one added yet');
      T_EnterPlayersNames.html('Enter players names');
    }

  }

// function that shows or hides the players
function RemovePlayersBoutton(input){
    this.input = input;
    if (input == 'show') {
      button_removePlayer = createButton('remove player')
      button_removePlayer.position(windowWidth/2 - button_removePlayer.width/2 , windowHeight/2 + 200 ).mousePressed(removePlayer);
    } else if (input == 'hide') {
      if (typeof button_removePlayer!= 'undefined'){
        button_removePlayer.remove();
      }
    }

  }