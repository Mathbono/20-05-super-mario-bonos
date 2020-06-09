import Phaser from 'phaser';

import {
	MUSICEND,
	MUSICGAME,
	MUSICLOST,
	DUDE,
	FOREST,
	GREENSUN,
	MINE,
	PLATFORM1,
	PLATFORM2,
	PLATFORM3,
	RAINBOW,
	SAW,
	SONICONE,
	SONICTWO,
	WATER
} from './constants';
import {
	block_1,
	block_2,
	block_3,
	carousel_1,
	carousel_2,
	carousel_3,
	carousel_4,
	elevator_1,
	elevator_2,
	elevator_3,
	elevator_4,
	elevator_5,
	cross
} from './movables';

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('game-scene');
	}
	preload() {
		const IMG = 'assets/img/';
		const SOUND = 'assets/sound/';

		this.load.audio(MUSICEND, `${SOUND}end.wav`);
		this.load.audio(MUSICGAME, [
			`${SOUND}Andrea_Milana_-_Harlequin_-_The_Clockworks_-_Electribe_MX_REMIX.ogg`,
			`${SOUND}Andrea_Milana_-_Harlequin_-_The_Clockworks_-_Electribe_MX_REMIX.mp3`
		]);
		this.load.audio(MUSICLOST, `${SOUND}miss.ogg`);

		this.load.spritesheet(DUDE, `${IMG}${DUDE}.png`, {
			frameWidth: 32,
			frameHeight: 48
		});

		this.load.image(FOREST, `${IMG}${FOREST}.png`);
		this.load.image(GREENSUN, `${IMG}${GREENSUN}.png`);
		this.load.image(MINE, `${IMG}${MINE}.png`);
		this.load.image(PLATFORM1, `${IMG}${PLATFORM1}.png`);
		this.load.image(PLATFORM2, `${IMG}${PLATFORM2}.png`);
		this.load.image(PLATFORM3, `${IMG}${PLATFORM3}.png`);
		this.load.image(RAINBOW, `${IMG}${RAINBOW}.png`);
		this.load.image(SAW, `${IMG}${SAW}.png`);
		this.load.image(SONICONE, `${IMG}${SONICONE}.png`);
		this.load.image(SONICTWO, `${IMG}${SONICTWO}.png`);
		this.load.image(WATER, `${IMG}${WATER}.jpg`);
	}
	create() {
		this.cameras.main.setBounds(0, 0, 1920 * 5, 1080);
		this.physics.world.setBounds(0, 0, 1920 * 5, 1080);

		this.musicend = this.sound.add(MUSICEND, {volume: 0.2});
		this.musicgame = this.sound.add(MUSICGAME, {volume: 0.1, loop: true});
		this.musicgame.play();
		this.musiclost = this.sound.add(MUSICLOST, {volume: 0.2});

		const ground = 250;
		this.add.image(500, ground, FOREST);
		this.add.image(1500, ground, FOREST);
		this.add.image(2500, ground, FOREST);
		this.add.image(3500, ground, FOREST);
		this.add.image(4500, ground, FOREST);
		this.add.image(5500, ground, FOREST);
		this.add.image(6500, ground, FOREST);
		this.add.image(7500, ground, FOREST);
		this.add.image(8500, ground, FOREST);
		this.add.image(9500, ground, FOREST);
		const bottom = 1375;
		this.add.image(400, bottom, WATER).setScale(4);
		this.add.image(2904, bottom, WATER).setScale(4);
		this.add.image(5408, bottom, WATER).setScale(4);
		this.add.image(7912, bottom, WATER).setScale(4);
		this.add.image(8416, bottom, WATER).setScale(4);

		this.add.image(5500, 542, SONICTWO);
		this.add.image(8200, 424, SONICONE);

		const rainbow = this.physics.add.staticImage(9500, 430, RAINBOW);

		const enemies = this.createEnemies();

		const platforms = this.createPlatforms();

		const block1 = this.createMovablePlatform(
			block_1.width,
			block_1.height,
			block_1.key,
			block_1.tweens
		);
		const block2 = this.createMovablePlatform(
			block_2.width,
			block_2.height,
			block_2.key,
			block_2.tweens
		);
		const block3 = this.createMovablePlatform(
			block_3.width,
			block_3.height,
			block_3.key,
			block_3.tweens
		);
		const carousel1 = this.createMovablePlatform(
			carousel_1.width,
			carousel_1.height,
			carousel_1.key,
			carousel_1.tweens
		);
		const carousel2 = this.createMovablePlatform(
			carousel_2.width,
			carousel_2.height,
			carousel_2.key,
			carousel_2.tweens
		);
		const carousel3 = this.createMovablePlatform(
			carousel_3.width,
			carousel_3.height,
			carousel_3.key,
			carousel_3.tweens
		);
		const carousel4 = this.createMovablePlatform(
			carousel_4.width,
			carousel_4.height,
			carousel_4.key,
			carousel_4.tweens
		);
		const elevator1 = this.createMovablePlatform(
			elevator_1.width,
			elevator_1.height,
			elevator_1.key,
			elevator_1.tweens
		);
		const elevator2 = this.createMovablePlatform(
			elevator_2.width,
			elevator_2.height,
			elevator_2.key,
			elevator_2.tweens
		);
		const elevator3 = this.createMovablePlatform(
			elevator_3.width,
			elevator_3.height,
			elevator_3.key,
			elevator_3.tweens
		);
		const elevator4 = this.createMovablePlatform(
			elevator_4.width,
			elevator_4.height,
			elevator_4.key,
			elevator_4.tweens
		);
		const elevator5 = this.createMovablePlatform(
			elevator_5.width,
			elevator_5.height,
			elevator_5.key,
			elevator_5.tweens
		);
		const boat = this.createMovablePlatform(
			cross.width,
			cross.height,
			cross.key,
			cross.tweens
		);

		this.player = this.createPlayer();
		this.tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
		this.tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();

		this.physics.add.collider(
			this.player,
			enemies,
			this.gameOver,
			null,
			this
		);
		this.physics.add.collider(this.player, rainbow, this.endGame, null, this);
		this.physics.add.collider(this.player, platforms);
		this.physics.add.collider(this.player, block1);
		this.physics.add.collider(this.player, block2);
		this.physics.add.collider(this.player, block3);
		this.physics.add.collider(this.player, carousel1);
		this.physics.add.collider(this.player, carousel2);
		this.physics.add.collider(this.player, carousel3);
		this.physics.add.collider(this.player, carousel4);
		this.physics.add.collider(this.player, elevator1);
		this.physics.add.collider(this.player, elevator2);
		this.physics.add.collider(this.player, elevator3);
		this.physics.add.collider(this.player, elevator4);
		this.physics.add.collider(this.player, elevator5);
		this.physics.add.collider(this.player, boat);

		this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

		this.cursors = this.input.keyboard.createCursorKeys();
		const FKey = this.input.keyboard.addKey('F');
		FKey.on(
			'down',
			function () {
				if (this.scale.isFullscreen) {
					this.scale.stopFullscreen();
				} else {
					this.scale.startFullscreen();
				}
			},
			this
		);
	}
	createPlatforms() {
		const platforms = this.physics.add.staticGroup();
		platforms.create(20, 555, PLATFORM1);
		platforms.create(350, 555, PLATFORM1);
		platforms.create(750, 465, PLATFORM1);
		platforms.create(1100, 400, PLATFORM1);
		platforms.create(1450, 315, PLATFORM1);
		platforms.create(5400, 610, PLATFORM3);
		platforms.create(8350, 555, PLATFORM3);

		platforms.create(8850, 555, PLATFORM3);
		platforms.create(9350, 555, PLATFORM3);
		platforms.create(10850, 555, PLATFORM3);
		return platforms;
	}
	createMovablePlatform(width, height, key, tweens) {
		const platform = this.physics.add
			.image(width, height, key)
			.setImmovable(true)
			.setVelocity(100, -100);
		platform.body.setAllowGravity(false);
		this.tweens.timeline({
			targets: platform.body.velocity,
			loop: -1,
			tweens
		});
		return platform;
	}
	createEnemies() {
		const enemies = this.physics.add.staticGroup();
		const area = 580;
		enemies.create(3000, 290, SAW);
		enemies.create(5300, 350, GREENSUN);
		enemies.create(6000, area, MINE);
		enemies.create(6500, area, MINE);
		enemies.create(7000, area, MINE);
		enemies.create(7200, area, MINE);
		enemies.create(7400, area, MINE);
		return enemies;
	}
	createPlayer() {
		const player = this.physics.add.sprite(100, 450, DUDE);
		// const player = this.physics.add.sprite(3600, 200, DUDE);
		// SONICTWO
		// const player = this.physics.add.sprite(5400, 500, DUDE);
		// SONICONE
		// const player = this.physics.add.sprite(9000, 450, DUDE);
		player.setBounce(0.2);
		player.setCollideWorldBounds(true);
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers(DUDE, {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: 'turn',
			frames: [{key: DUDE, frame: 4}],
			frameRate: 20
		});
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers(DUDE, {start: 5, end: 8}),
			frameRate: 10,
			repeat: -1
		});
		return player;
	}
	update() {
		this.player.getWorldTransformMatrix(
			this.tempMatrix,
			this.tempParentMatrix
		);
		this.position = this.tempMatrix.decomposeMatrix();
		if (this.position.translateY > 555) {
			this.gameOver(this.player);
		}
		if (this.cursors.left.isDown) {
			this.player.setVelocityX(-250);
			this.player.anims.play('left', true);
		} else if (this.cursors.right.isDown) {
			this.player.setVelocityX(250);
			this.player.anims.play('right', true);
		} else {
			this.player.setVelocityX(0);
			this.player.anims.play('turn');
		}
		if (this.cursors.up.isDown && this.player.body.touching.down) {
			this.player.setVelocityY(-400);
		}
	}
	endGame(player) {
		this.musicgame.stop();
		this.musicend.play();
		this.physics.pause();
		player.anims.play('turn');
	}
	gameOver(player) {
		this.musicgame.stop();
		this.musiclost.play();
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play('turn');
		if (this.position.translateY > 555) {
			this.scene.restart();
		} else {
			setTimeout(() => this.scene.restart(), 3000);
		}
	}
}
