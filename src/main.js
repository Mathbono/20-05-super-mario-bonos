import Phaser from 'phaser';

import GameScene from './scenes/GameScene';

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.FIT,
		parent: 'phaser-example',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 800,
		height: 600
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 900},
			debug: false
		}
	},
	scene: GameScene
};

export default new Phaser.Game(config);
