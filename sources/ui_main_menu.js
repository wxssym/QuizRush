function ui_title_screen(){
    image(quiz_rush_logo, windowWidth / 2 - quiz_rush_logo.width / 2, 0);
    removeElements();
    button_game = createButton('start').mousePressed(ui_add_players);
    button_game.position(windowWidth / 2 - button_game.width/2, windowHeight / 2)
    button_add_a_question = createButton('settings').mousePressed(ui_settings);
    button_add_a_question.position(windowWidth / 2 - button_add_a_question.width/2, windowHeight / 2 + button_game.height + 5);
};
