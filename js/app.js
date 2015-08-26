// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    this.sprite = 'images/enemy-bug.png';
    this.reset();
    
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed*dt;
    
    if(this.x>505){
        allEnemies.slice(allEnemies.indexOf(this),1);
        this.reset();
        
    }
    
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Enemy.prototype.reset = function(){
    
    this.x = -150;
    this.y = this.getRandomY()*83 + 51;
    this.speed = this.getSpeed();
}
Enemy.prototype.getRandomY = function() {
    return Math.floor(Math.random() * 3);
}
Enemy.prototype.getSpeed = function() {
    return Math.random() * (200 + (counter*50) - 200) + 200;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';;
    this.reset();

}
Player.prototype.update = function(){
    if(this.y>400){
        this.reset();
        
    }
    else {
        var self = this;
        allEnemies.forEach(function(enemy){
            if (enemy.y == self.y){
                if (enemy.x >= player.x - 30 && enemy.x <= player.x + 30) {
                    self.reset();
                }
            }
        });
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.reset = function(){
    this.x = 101*3;
    this.y = 50 *6;
}
Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
        this.x = this.x-101;
        break;
        case 'up':
        this.y = this.y - 83;
        break;
        case 'right':
        this.x = this.x + 101;
        break;
        case 'down':
        this.y = this.y + 83;
        break;
    };
    if (this.x<0){
        this.x = 0;
    }
    if (this.x > 400){
        this.x = 400;
    }
    if (this.y<0){
        this.reset();
        counter++;
        
        alert(counter + "-nd level");
    }
    if (this.y>100){
        thi.reset();
    }
<<<<<<< HEAD
    return counter;
||||||| merged common ancestors
    
    this.addEventListener('touchmove', function(event) {
  // Если 1 палец внутри элемента
        if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];
    // Place element where the finger is
    obj.style.left = touch.pageX + 101;
    obj.style.top = touch.pageY + 83;
  }
}, false);
=======
    
>>>>>>> 68abbe510b48b8aa89c77294da0a150117c14bec
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var counter = 1;
var allEnemies = [];
for (var i=0;i<4 ;i++){
    allEnemies.push(new Enemy())
    
}
var player = new Player();
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
