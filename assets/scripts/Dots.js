class Dots extends Phaser.GameObjects.Sprite {
    constructor(scene, position) {
        let rnd = Phaser.Math.RND;
        super(scene, position.x, position.y, rnd.pick(config.dots));
        this.scene = scene;
        //this.setOrigin(0, 0);
        this.scene.add.existing(this);
        this.setInteractive();
        // this.on('pointerdown', this.open, this);
    }

    open() {
        console.log(this, 'clicked');
    }
    
    getColor() {
        switch (this.texture.key) {
            case 'red':
                return '0xD11E1E';
            case 'yellow':
                return '0xF6CF43';
            case 'green':
                return '0x55DB25';
            case 'purple':
                return '0x8E19AB';
            case 'blue':
                return '0x23FFF2';
            default:
                return '0x000000';
        }
    }
}