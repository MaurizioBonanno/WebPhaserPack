import { WorldScene } from './worldScene';
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
}

export class GameScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private cursorKey: any;
   
    constructor() {
        super(sceneConfig);
    }

    public create(){
        this.square = this.add.rectangle(400,400,100,100,0xFFFFFF) as any;
        this.physics.add.existing(this.square);
        this.cursorKey = this.input.keyboard.createCursorKeys();
    }

    public update(){

        if(this.cursorKey.up.isDown){
            this.square.body.setVelocityY(-500);
        }else if(this.cursorKey.down.isDown){
            this.square.body.setVelocityY(500);
        }else{
            this.square.body.setVelocityY(0);
        }
        
        
        if(this.cursorKey.left.isDown){
            this.square.body.setVelocityX(-500)
        }else if(this.cursorKey.right.isDown){
            this.square.body.setVelocityX(500);
        }else{
            this.square.body.setVelocityX(0);
        }


    }
}