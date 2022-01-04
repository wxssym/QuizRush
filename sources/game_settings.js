function settings(number_of_cases) {
    this.number_of_cases = number_of_cases;
    this.background_color = 51;
    this.difficulty_text = {0:'easy',1:'medium',2:'hard'};
    this.Api_categories_url = 'https://opentdb.com/api_category.php';
    this.categories_data = async function (){
        this.categories_response = await fetch(this.Api_categories_url);
        this.available_categories = await this.categories_response.json();
        this.game_categories = await this.available_categories["trivia_categories"];
        return this.game_categories ;
    }
    this.categories_data();
};