/// <reference path="../lib/phaser-ce/typescript/phaser.d.ts" />
var GC = (function () {
    function GC() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    GC.prototype.preload = function () {
        this.game.load.image('logo', '../assets/phaser.png');
    };
    GC.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return GC;
}());
window.onload = function () { new GC(); };
