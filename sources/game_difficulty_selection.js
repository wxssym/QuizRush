function selector_difficulty_Onchange(){
    if (selector_difficulty.value() == 'easy'){
        ui_easy_question(player_index);
    } 
    else if (selector_difficulty.value() == 'medium'){
        ui_medium_question(player_index);
    }
    else if (selector_difficulty.value() == 'hard'){
        ui_hard_question(player_index);
    } 
    else {}
}