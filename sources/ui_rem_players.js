function ui_remove_player(){
    removeElements();
    div_remplayer = createDiv().id("div_remplayer").class("div_remplayer_style").parent("main");
    selection_removePlayer = createSelect().class('dropDown').parent('div_remplayer');
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