function ui_remove_player(){
    removeElements();
    selection_removePlayer = createSelect().style('transform', 'translate(-50%,-50%)');
    selection_removePlayer.position(windowWidth / 2, windowHeight / 2);
    selection_removePlayer.option('select a player to remove');
    for (let ii = 0; ii<players.length;ii++){
        selection_removePlayer.option(players[ii].player_name);
    };
    selection_removePlayer.changed(selection_removePlayer_OnChange);
};

function selection_removePlayer_OnChange(){
    removed_index = players_names_list.indexOf(selection_removePlayer.value());
    players.splice(removed_index,1);
    players_names_list.splice(removed_index,1);
    ui_add_players();
}