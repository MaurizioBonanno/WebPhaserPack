import { InterScene } from './interScene';
import { WorldScene } from './worldScene';
export class BootScene extends Phaser.Scene implements InterScene {
    preload(){
        this.load.image('tiles','../assets/map/spritesheet.png');
        this.load.tilemapTiledJSON('map','../assets/map/map.json');
        this.load.spritesheet('player','../assets/sprites/RPG_assets.png',{ frameWidth:16, frameHeight:16 });
    }
    create(){
        this.scene.start('WorldScene');
    }

    update(){

    }

}