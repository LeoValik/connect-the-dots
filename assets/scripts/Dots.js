class Dots extends Phaser.GameObjects.Sprite {
    constructor(scene, position, color) {
        super(scene, position.x, position.y);
        this.scene = scene;
        this.name = color;
        this.selected = config.selected;
        this.scoreList = config.scoreList;
        this.setOrigin(0.5, 0.5);
        this.scene.add.existing(this);
        this.setInteractive();
        this.on('pointerdown', this.dotClicked, this);
        // this.on('pointerdown', this.open, this);
    }

    dotClicked() {
        this.selected = this;
        this.scoreList.push(this);
        console.log(this, this.name, 'clicked');
        console.log(this.scoreList);
    }
    
}