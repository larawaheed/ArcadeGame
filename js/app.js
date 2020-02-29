let allEnemies = [];

let score = new Score();

// Enemies our player must avoid


function Enemies() {
    for(let y of [160, 240, 330]) {
        let x = Math.random() * 200;
        allEnemies.push(new Enemy(x, y));
    }
}
// Now write your own player class
let player = new Player();//player object from plyer class

// This class requires an update(), render() and
// a handleInput() method.
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allGems = [];

// Place the player object in a variable called player
function Gems() {
    allGems = [];
    for(let i=0; i<4; i++) {
        allGems.push(new Gem());
    }
}
//Calling the two functions to make it work
Enemies();
Gems();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
