class Gem {
    static sprites = ["Gem Green.png", "Gem Blue.png", "Gem Orange.png"];//name of all files
    //we made it static because we need all the other classes to it
    static yLocations = [160, 240, 330];
    constructor() {
        let index = parseInt(Math.random() * Gem.sprites.length);//random sprites of the array
        this.sprite = 'images/' + Gem.sprites[index];
        //the gems must be moving, and the next lines defines how will it move
        this.angle = 0;
        this.angleSpeed = -2 + (Math.random() * 4);
        let column = parseInt(Math.random() * 5);

        this.x = 100 * column + 50;
        let yIndex = parseInt(Math.random() * Gem.yLocations.length);
        this.y = Gem.yLocations[yIndex];
      }
    update(dt) {
        this.angle += this.angleSpeed * dt ;
    }
    render() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(0.5, 0.5);
        ctx.drawImage(Resources.get(this.sprite),  - 50 ,  - 100);
        ctx.restore();
    }
}
