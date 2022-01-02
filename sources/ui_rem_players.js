function ui_remove_player(){
    removeElements();
    selection_removePlayer = createSelect();
    selection_removePlayer.position(windowWidth / 2, windowHeight / 2 + selection_removePlayer.height);
};