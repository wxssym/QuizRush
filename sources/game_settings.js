function settings() {
    this.number_of_cases = 20;
    this.difficulty_text = {0:'easy',1:'medium',2:'hard'};
    this.Api_categories_url = 'https://opentdb.com/api_category.php';
    this.categories_data = async function (){
        this.categories_response = await fetch(this.Api_categories_url);
        this.available_categories = await this.categories_response.json();
        this.game_categories = await this.available_categories["trivia_categories"];
        return await this.game_categories;
    }
    this.categories_data();

    this.default_categories_data = async function (){
        this.default_categories_response = await fetch(this.Api_categories_url);
        this.default_available_categories = await this.default_categories_response.json();
        this.default_game_categories = await this.default_available_categories["trivia_categories"];
        return await this.default_game_categories;
    }
    this.default_categories_data();
}