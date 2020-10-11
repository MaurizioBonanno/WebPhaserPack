
import { InterScene } from './interScene';


export class WorldScene  extends Phaser.Scene implements InterScene{

     public map: Phaser.Tilemaps.Tilemap ;
     public tiles;
     public grass;
     public obstacles;
     public player;
     public cursor: any;
     public spawns;


    constructor(){
        super({active: false, visible: false , key: 'WorldScene'})
    }

    public preload(){
 }

    public create(){
        this.map = this.make.tilemap({ key: 'map'})
        this.tiles = this.map.addTilesetImage('spritesheet','tiles')
        this.grass = this.map.createStaticLayer('Grass',this.tiles,0,0)
        this.obstacles = this.map.createStaticLayer('Obstacles',this.tiles,0,0)
        this.obstacles.setCollisionByExclusion([-1])

        this.player = this.physics.add.sprite(50,100,'player',6)

        this.physics.world.bounds.width = this.map.widthInPixels;
        this.physics.world.bounds.height = this.map.heightInPixels;

        this.player.setCollideWorldBounds(true);

        this.cursor = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setRoundPixels(true);

        this.anims.create({
            key:'left',
            frames: this.anims.generateFrameNumbers('player',{frames: [1,7,1,13]}),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key:'right',
            frames: this.anims.generateFrameNumbers('player',{frames: [1,7,1,13]}),
            frameRate: 10,
            repeat: -1
        })


        this.anims.create({
            key:'up',
            frames: this.anims.generateFrameNumbers('player',{frames: [2,8,2,14]}),
            frameRate: 10,
            repeat: -1
        })


        this.anims.create({
            key:'down',
            frames: this.anims.generateFrameNumbers('player',{frames: [0,6,0,12]}),
            frameRate: 10,
            repeat: -1
        })

        this.physics.add.collider(this.player,this.obstacles);

    }

    public update(time,delta){

        this.player.body.setVelocity(0);

        if(this.cursor.left.isDown){
            this.player.body.setVelocityX(-30);
            this.player.anims.play('left',true);
            this.player.flipX = true;
        }
        else if(this.cursor.right.isDown){
            this.player.body.setVelocityX(30);
            this.player.anims.play('right',true);
            this.player.flipX = false;
        }
        else if(this.cursor.up.isDown){
            this.player.body.setVelocityY(-30);
            this.player.anims.play('up',true);
        }
        else if(this.cursor.down.isDown){
            this.player.body.setVelocityY(30);
            this.player.anims.play('down',true);
        }else{
            this.player.body.setVelocity(0);
            this.player.anims.stop();
        }

    }

    public onMeetEnemy(){

    }

    public addEnemyZone(){
        this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone});
        for(let i = 0; i< 30; i++){
            let x = Phaser.Math.RND.between(0,this.physics.world.bounds.width);
            let y = Phaser.Math.RND.between(0,this.physics.world.bounds.height);
            this.spawns.create(x,y,20,20)
        }
        this.physics.add.overlap(this.player,this.spawns,this.onMeetEnemy);
    }

}
