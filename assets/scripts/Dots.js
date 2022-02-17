class Dots extends Phaser.GameObjects.Sprite {
    constructor(scene, position) {
        let rnd = Phaser.Math.RND;
        super(scene, position.x, position.y, rnd.pick(config.dots));
        this.scene = scene;
        this.setOrigin(0, 0);
        this.scene.add.existing(this);
    }
}