import * as Phaser from 'phaser-ce'

var develop

export default class GC {

    private game: Phaser.Game

    constructor(pDevelop = false) {

        if (pDevelop){
            console.log("Running in develop mode!")
            develop = pDevelop
        }

        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create })      
    }

    private preload() {

        if (develop){
            this.game.load.crossOrigin = true  // Activate cross Origin
            console.log("Cross Origin available: " + this.game.load.crossOrigin)
        }        
        this.game.load.image('logo', 'js/../assets/phaser.png')
    }

    private create() {

        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')
        logo.anchor.setTo(0.5, 0.5)
    }
}