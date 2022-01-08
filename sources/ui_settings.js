function ui_settings(){
    removeElements();
    div_settings = createDiv().id("settings_div").class("settings_div_style").parent("main");
    div_settings = createDiv().id("number_of_cases_div").class("number_of_cases_div_style").parent("settings_div");    
    number_of_cases_text = createP('Number of cases : ').parent('number_of_cases_div').class('settings_text_style');
    number_of_cases_input = createInput().attribute('placeholder', 'default:20').parent('number_of_cases_div').class('settings_input_style');

    div_change_cat = createDiv().id("div_change_categories").class("div_change_categories_button").parent("settings_div");
    button_cancel = createButton('Select game categories').parent('div_change_categories').mousePressed(ChangeGameCategories).class('buttons').style('width','200px');
      //buttons div
    div_save_cancel = createDiv().id("div_settings_buttons").class("div_settings_buttons").parent("settings_div");
    //add start buttons
    button_cancel = createButton('cancel').parent('div_settings_buttons').mousePressed(cancelSettings).class('buttons');
    button_save = createButton('save').parent('div_settings_buttons').mousePressed(saveSettings).class('buttons');

};


function cancelSettings(){
    settings.number_of_cases = 20;
    settings.game_categories = settings.default_game_categories;
    ui_title_screen();
};

function saveSettings(){
    if (number_of_cases_input.value() !=0){
        settings.number_of_cases = number_of_cases_input.value();
    };
    ui_title_screen();
};

function ChangeGameCategories(){

};