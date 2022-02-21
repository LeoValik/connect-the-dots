let config = {
    type: Phaser.AUTO, // WEBGL or Canvas
    width: 1280,
    height: 720,
    rows: 6, 
    cols: 6,
    dots: ['yellow', 'green', 'red', 'purple', 'blue'],
    /**
     * 'yellow':  '0xF6CF43', 
        'green':  '0x55DB25',
        'red':    '0xD11E1E',
        'purple': '0x8E19AB',
        'blue':   '0x23FFF2'
    */
    colors: ['0xD11E1E', '0xF6CF43', '0x55DB25', '0x8E19AB', '0x23FFF2'],
    score: 0,
    scoreList: [],
    idCount: 0,
    selected: null,
    disableContextMenu: true,
    scene: new GameScene(),
    backgroundColor: "#eee"
};

let game = new Phaser.Game(config);