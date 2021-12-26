function player(name){
    this.player_name = name;
    this.player_score = 0;
    this.player_case = 0;

    this.add_score= function(points){
        this.player_score = this.player_score + points;
        this.player_case = this.player_case + points;
    };
}

