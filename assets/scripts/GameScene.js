class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.image('yellow', '../../assets/sprites/yellow-dot.svg');
        this.load.image('green', '../../assets/sprites/green-dot.svg');
        this.load.image('red', '../../assets/sprites/red-dot.svg');
        this.load.image('purple', '../../assets/sprites/purple-dot.svg');
        this.load.image('blue', '../../assets/sprites/blue-dot.svg');
    }

    create() { 
        this.createDots(); 
    }

    update() {

    }

    createDots() {
        this.dots = [];
        let positions = this.getDotsPositions();

        for(let position of positions) {
            this.dots.push(new Dots(this, position));
        }

        this.input.on('gameobjectdown', this.onDotClicked, this);
    }

    onDotClicked(pointer, dots) {
        dots.open();
        this.drawLine(dots);
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

    drawLine(dots) {
        let graphics = this.add.graphics();
        let color = dots.getColor();
        console.log(color);
        let thickness = 10;
        let alpha = 1;
        //  Events
        let sx = 0;
        let sy = 0;
        let draw = false;

        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', function (pointer) {
            sx = pointer.x;
            sy = pointer.y;
            draw = true;
            // if (pointer.leftButtonDown() || pointer.rightButtonDown())
            // {
            //     color = '0x00ffff';
            // }
        });

        this.input.on('pointerup', function () {
            draw = false;
        });
    
        this.input.on('pointermove', function (pointer) {
            if (draw && pointer.noButtonDown() === false)
            {
                graphics.clear();
                graphics.lineStyle(thickness, color, alpha);
                graphics.lineBetween(sx, sy, pointer.x, pointer.y);
            }
        });
    }
}
