//the enemy class
class Enemy {

    constructor(x, y) {//x and y are the position of enemy
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;

        this.velocity = 100 + (Math.random() * 100); //declaring the velocity of enemy,
        //it will be randomly declared from 100 to 200 each time the game starts
    }
    update(delta) {
      //next is the equation of solving the speed
        this.x += this.velocity * delta;
        if (this.x > ctx.canvas.width + 50) {
            this.x = -100;
        }

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x - 50, this.y-100);


    }
};
