/// <reference path="../lib/phaser-ce/typescript/phaser.d.ts" />

class GC {

    private game: Phaser.Game

    constructor() {

        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create })
    }

    private preload() {

        this.game.load.image('logo', '../assets/phaser.png')
    }

    private create() {

        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')
        logo.anchor.setTo(0.5, 0.5)
    }
}

window.onload = () => { new GC() }