function ui_title_screen(){
    // canvas creation
    //createCanvas(windowWidth, windowHeight);
    noCanvas();
    players=[];

    removeElements();
    div_main_menu = createDiv().id("main_menu_div").class("main_menu_div_style").parent("main");
    button_game = createButton('Start').class('buttons').parent('main_menu_div');
    button_game.mouseClicked(ui_add_players);
    button_settings = createButton('Settings').class('buttons').parent('main_menu_div');
    button_settings.mouseClicked(ui_settings);
};
