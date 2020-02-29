class Score {
    constructor() {
        this.Restart();
    }
    Restart() {//we made the restart as a function, so that we can call it in the player class
        this.Score = 0;
    }
    render() {
        ctx.font = "30px Arial";
        ctx.strokeText(`Lives: ${player.lives}`, 10, 40);
        ctx.strokeText(`Score: ${this.Score}`, 350, 40);
        if(player.lives < 1) {
            player.Lost();//calling the function from player class
            ctx.font = "25px Arial";
            ctx.strokeText("you lost. press space to play gain", 10, 613);
        }
        if(allGems.length == 0) {
            player.Won();//calling the function from player class
            ctx.font = "25px Arial";
            ctx.strokeText("YOU WON!!!press space to play gain", 10, 613);
        }
    }
    increase() {
        this.Score += 50;
    }
}
