class Dots extends Phaser.GameObjects.Sprite {
    constructor(scene, position, color) {
        super(scene, position.x, position.y);
        this.scene = scene;
        this.name = color;
        this.setOrigin(0.5, 0.5);
        this.scene.add.existing(this);
        this.setInteractive();
        // this.on('pointerdown', this.open, this);
    }
    
}