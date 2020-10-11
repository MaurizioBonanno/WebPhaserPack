import { GameScene } from './gamescene';
import { WorldScene } from './worldScene';
import { BootScene } from './BootScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Esempio",
    type: Phaser.AUTO,
    scale:{
        width: 320,
        height: 240,
        zoom: 2
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0
            }
        }
    },
    parent: 'game',
    backgroundColor: '#000000',
    scene: [ BootScene,WorldScene]
}