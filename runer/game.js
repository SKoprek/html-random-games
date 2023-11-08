let game;
let cursors;
var spaceBar;
let score = 0;
let scoreText;
// global game options
let gameOptions = {
    platformStartSpeed: 250,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 900,
    jumpForce: 400,

    playerStartPosition: 200,
    jumps: 2
}

window.onload = function() {

    // object containing configuration options
    let gameConfig = {
        type: Phaser.AUTO,
        width: 640,
        height: 360,
        scene: playGame,
        backgroundColor: 0x444444,

        // physics settings
        physics: {
            default: "arcade"
        }
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
}

// playGame scene
class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    preload(){
        // this.load.image("platform", "img/platform.png");
        // this.load.image("player", "img/player.png");
        // https://www.pinclipart.com/picdir/middle/357-3576216_500-x-639-1-single-player-icon-png.png
        this.load.image("player", "img/player_n.png");
        // https://cdn.gamedevmarket.net/wp-content/uploads/20191203140555/5b816cf8b3d15f01d49fe5f7481367b2.png
        this.load.image("platform", "img/platform_n.png");


    }
    create(){
        cursors = this.input.keyboard.createCursorKeys()
        spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        score = 0;
        scoreText = this.add.text(16, 16, '', { fontSize: '32px', fill: '#000' })
        // group with all active platforms.
        this.platformGroup = this.add.group({

            // once a platform is removed, it's added to the pool
            removeCallback: function(platform){
                platform.scene.platformPool.add(platform)
            }
        });

        // pool
        this.platformPool = this.add.group({

            // once a platform is removed from the pool, it's added to the active platforms group
            removeCallback: function(platform){
                platform.scene.platformGroup.add(platform)
            }
        });

        // number of consecutive jumps made by the player
        this.playerJumps = 0;

        // adding a platform to the game, the arguments are platform width and x position
        this.addPlatform(game.config.width, game.config.width / 2);

        // adding the player;
        this.player = this.physics.add.sprite(gameOptions.playerStartPosition, game.config.height / 2, "player");
        this.player.setGravityY(gameOptions.playerGravity);

        // setting collisions between the player and the platform group
        this.physics.add.collider(this.player, this.platformGroup);

        // checking for input
        this.input.on("pointerdown", this.jump, this);
    }

    // the core of the script: platform are added from the pool or created on the fly
    addPlatform(platformWidth, posX){
        let platform;


        if(this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove(platform);
        }
        else{
            platform = this.physics.add.sprite(posX, game.config.height * 0.8, "platform");
            platform.setImmovable(true);
            this.platformGroup.add(platform);
        }
        platform.displayWidth = platformWidth;
        this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
    }

    // the player jumps when on the ground, or once in the air as long as there are jumps left and the first jump was on the ground
    jump(){
        if(this.player.body.touching.down || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps)){
            if(this.player.body.touching.down){
                this.playerJumps = 0;
            }
            this.player.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;
        }
    }
    update(){

        // game over
        if(this.player.y > game.config.height){
            this.scene.start("PlayGame");
        }
        // this.player.x = gameOptions.playerStartPosition;

        // recycling platforms
        let minDistance = game.config.width;
        this.platformGroup.getChildren().forEach(function(platform){
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            minDistance = Math.min(minDistance, platformDistance);
            if(platform.x < - platform.displayWidth / 2){
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        }, this);

        // adding new platforms
        if(minDistance > this.nextPlatformDistance){
            var nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
            this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2);
            score += 10
            scoreText.text = 'Score: ' + score
        }
        if(this.player.body.x < game.config.width/2){
            this.platformGroup.getChildren().forEach(function(platform){
                platform.setVelocityX(0);
            }, this);
        }
        else if(this.player.body.x > game.config.width/2){
            this.platformGroup.getChildren().forEach(function(platform){
                platform.setVelocityX(gameOptions.platformStartSpeed * -1);
            }, this);
        }else
        {
            this.platformGroup.getChildren().forEach(function(platform){
                platform.setVelocityX(0);
            }, this);
        }


        if(cursors.left.isDown)
        {
            console.log("down");
            this.player.setVelocityX(-250);
        }else if(cursors.right.isDown)
        {
            console.log("down" , this.player.body.x,game.config.width);
            if(this.player.body.x < game.config.width/2){
            this.player.setVelocityX(250);
            // this.platformGroup.getChildren().forEach(function(platform){
            //     platform.setVelocityX(0);
            // }, this);
            }
            else if(this.player.body.x > game.config.width/2){
            this.player.setVelocityX(250);
            // this.platformGroup.getChildren().forEach(function(platform){
            // platform.setVelocityX(gameOptions.platformStartSpeed * -1);
            // }, this);
            }else
            {
                this.player.setVelocityX(0);
            //     this.platformGroup.getChildren().forEach(function(platform){
            //     platform.setVelocityX(0);
            // }, this);
            }
        }else{this.player.setVelocityX(0);}
        if(spaceBar.isDown)
        {
            if(this.player.body.touching.down || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps)){
            if(this.player.body.touching.down){
                this.playerJumps = 0;
            }
            this.player.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;
            }
        }
    }
};
function resize(){
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
