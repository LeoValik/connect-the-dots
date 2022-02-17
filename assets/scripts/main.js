let config = {
    type: Phaser.AUTO, // WEBGL or Canvas
    width: 1280,
    height: 720,
    rows: 6, 
    cols: 6,
    dots: ['yellow', 'green', 'red', 'purple', 'blue'],
    scene: new GameScene(),
    backgroundColor: "#eee"
};

let game = new Phaser.Game(config);