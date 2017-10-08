import * as Phaser from 'phaser-ce'
import * as Texture from './texture'

var develop

export default class GC {

    private game: Phaser.Game
    private player: Phaser.Sprite
    private cursors: Phaser.CursorKeys
    private graphics: Phaser.Graphics

    constructor(pDevelop = false) {

        if (pDevelop){
            console.log("Running in develop mode!")
            develop = pDevelop
        }

        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update })      
    }

    private preload() {

        if (develop){
            this.game.load.crossOrigin = true  // Activate cross Origin
            console.log("Cross Origin available: " + this.game.load.crossOrigin)
        }        
        this.game.load.image('logo', 'js/../assets/phaser.png')
        this.game.create.texture('redSquare', Texture.redSquare, 4, 4, 0)
    }

    private create() {

        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')
        logo.anchor.setTo(0.5, 0.5)

        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.game.create.texture('redSquare', Texture.redSquare, 4, 4, 0)
        this.player = this.game.add.sprite(50, 50, 'redSquare')
        this.player.anchor.set(0.5)

        this.game.physics.arcade.enable(this.player)

        this.cursors = this.game.input.keyboard.createCursorKeys()

    }

    private update() {

        this.player.body.velocity.x = 0
        this.player.body.velocity.y = 0

        if (this.cursors.left.isDown){
            this.player.body.velocity.x = -200
            this.player.scale.x = 1
        }else if (this.cursors.right.isDown){
            this.player.body.velocity.x = 200
            this.player.scale.x = -1
        }

        if (this.cursors.up.isDown){
            this.player.body.velocity.y = -200;
        }else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = 200;
        }

    }
}