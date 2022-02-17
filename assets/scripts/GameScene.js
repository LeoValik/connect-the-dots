class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        //1. Load images
        this.load.image('yellow', '../../assets/sprites/yellow-dot.svg');
        this.load.image('green', '../../assets/sprites/green-dot.svg');
        this.load.image('red', '../../assets/sprites/red-dot.svg');
        this.load.image('purple', '../../assets/sprites/purple-dot.svg');
        this.load.image('blue', '../../assets/sprites/blue-dot.svg');
    }

    create() {
        // 2. Display images    
        let positions = this.getDotsPositions();

        let rnd = Phaser.Math.RND;
        let dotsImages = ['yellow', 'green', 'red', 'purple', 'blue'];

        for(let position of positions) {
            this.add.sprite(position.x, position.y, rnd.pick(dotsImages)).setOrigin(0, 0);
        }
    }

    getDotsPositions() {
        let positions = [];
        let dotTexture = this.textures.get("yellow").getSourceImage();
        let dotWidth = dotTexture.width + 25;
        let dotHeight = dotTexture.height + 25;
        let offsetX = (this.sys.game.config.width - dotWidth * config.cols) / 2;
        let offsetY = (this.sys.game.config.height - dotHeight * config.rows) / 2;
    
        for (let row = 0; row < config.rows; row++) {
            for(let col = 0; col < config.cols; col++) {
                positions.push({
                    x: offsetX + col * dotWidth,
                    y: offsetY + row * dotHeight,
                });
            }
        }
    
        return positions;
    }
}
