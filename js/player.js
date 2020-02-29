class Player {
    constructor() {
    
        this.sprite = 'images/char-cat-girl.png';
        this.lives = 5;
        //x, y are possitions of where the player will start the game
          this.x = 250;
          this.y = 500;
          this.pauseGame = false;
          this.winner = false;
    }
    update() {
    }
    Lost() {
        this.pauseGame = true;//the game will stop
        this.winner = false;//didn't win
    }
    Won() {
        this.pauseGame = true;//the game will stop until user presses space
        this.winner = true;
    }
      //x, y are possitions of where the player will start the game
    hitten() {
        this.lives -= 1;
        if(this.lives>0) {
          //x, y are possitions of where the player will start the game
            this.x = 250;
            this.y = 500;
            this.pauseGame = false;
            this.winner = false;
                  }
    }
    foundGem() {
        score.increase();//this funcion is in score class, and it increases the gem counter with 50 pints each time
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100);
    }

    handleInput(place) {
        if(this.pauseGame) {
            if(place=='space') {//game will be paused until the user presses space
                if(this.winner) {
                    Gems();
                    score.Restart();//if the user wins the game, we call the restart function to start over
                }
                this.lives = 5;//beginning with 3 chances
                //x, y are possitions of where the player will start the game
                  this.x = 250;
                  this.y = 500;
                  this.pauseGame = false;
                  this.winner = false;
            } else {
                return;//if nothing is pressed, nothing will change
            }

        }
        //switch statement to react with the users input
        switch(place) {
            case "right":
                if(this.x<400) {//canvas boundry from right
                    this.x += 100;
                }

                break;
            case "left"://canvas boundry from left
                if(this.x>50) {
                    this.x -= 100;
                }

                break;
            case "up"://canvas boundry from up
                if(this.y>100) {
                    this.y -= 82;
                }

                break;
            case "down"://canvas boundry from down
                if(this.y<500) {
                    this.y += 82;
                }

                break;
            default://if nothing of the above
                break;
        }
    }
}
