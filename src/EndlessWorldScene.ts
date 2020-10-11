import { InterScene } from './interScene';
export class EndlessWorld extends Phaser.Scene implements InterScene {
    public mapData = [];
    public mapWidth: number = 51;
    public mapHeight: number = 37;
    public distance: number = 0;
    public tiles = [ 7, 7, 7, 6, 6, 6, 0, 0, 0, 1, 1, 2, 3, 4, 5 ];
    preload(): void {
        throw new Error('Method not implemented.');
    }
    create(): void {
        
    }

    update(time,delta){

    }

}