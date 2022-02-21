class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {

    }

    create() { 
        this.createBoardOfDots(); 
    }

    update() {

    }

    createBoardOfDots() {
        this.boardOfDots = [];
        let positions = this.getDotsPositions();

        let rnd = Phaser.Math.RND;
        let alpha = 1;
        let radius = 20;
        let graphics = this.add.graphics();

        for(let position of positions) {
            let color = rnd.pick(config.colors);
            graphics.fillStyle(color, alpha);
            graphics.fillCircle(position.x, position.y, radius);
            //console.log(`x = ${position.x}, y = ${position.y}`);
            this.boardOfDots.push(new Dots(this, position, color));
        }

        //this.input.on('gameobjectdown', this.positionsOfDots(this.boardOfDots), this);

        console.log(this.boardOfDots);

    }

    getDotsPositions() {
        let positions = [];
        let sizeOfDots = 50;
        let dotWidth = sizeOfDots + 25;
        let dotHeight = sizeOfDots + 25;
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

    positionsOfDots(dots) {
        for (let row = 0; row < config.rows; row++) {
            let col = this.dots[row].indexOf(dots[col]);
            if (col > -1) {
                return {row: row, col: col};
            }
        }
        return {};
    }
}
