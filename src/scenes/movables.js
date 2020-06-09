import {PLATFORM1, PLATFORM2, PLATFORM3} from './constants';

const move = 400;
const duration = 500;
const file_1 = [
	{x: 0, y: -move, duration, ease: 'Stepped'},
	{x: 0, y: move, duration, ease: 'Stepped'}
];
const file_2 = [
	{x: 0, y: move, duration, ease: 'Stepped'},
	{x: 0, y: -move, duration, ease: 'Stepped'}
];

export const block_1 = {
	width: 20,
	height: 570,
	key: PLATFORM1,
	tweens: [
		{x: 0, y: -200, duration: 2000, ease: 'Stepped'},
		{x: 0, y: 0, duration: 1000, ease: 'Stepped'},
		{x: 150, y: 100, duration: 4000, ease: 'Stepped'},
		{x: 0, y: -200, duration: 2000, ease: 'Stepped'},
		{x: 0, y: 0, duration: 1000, ease: 'Stepped'},
		{x: -150, y: 100, duration: 4000, ease: 'Stepped'}
	]
};
export const block_2 = {
	width: 1950,
	height: 550,
	key: PLATFORM1,
	tweens: [
		{x: 0, y: -100, duration: 4000, ease: 'Stepped'},
		{x: 0, y: 100, duration: 4000, ease: 'Stepped'}
	]
};
export const block_3 = {
	width: 3600,
	height: 300,
	key: PLATFORM3,
	tweens: [
		{x: -300, y: 0, duration: 4000, ease: 'Stepped'},
		{x: 300, y: 0, duration: 4000, ease: 'Stepped'}
	]
};
export const carousel_1 = {
	width: 3900,
	height: 300,
	key: PLATFORM1,
	tweens: [
		{x: move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: -move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: -move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'}
	]
};
export const carousel_2 = {
	width: 4200,
	height: 100,
	key: PLATFORM1,
	tweens: [
		{x: move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: -move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: -move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'}
	]
};
export const carousel_3 = {
	width: 4400,
	height: 300,
	key: PLATFORM1,
	tweens: [
		{x: -move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: -move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'}
	]
};
export const carousel_4 = {
	width: 4200,
	height: 500,
	key: PLATFORM1,
	tweens: [
		{x: -move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: move, y: -move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'},
		{x: -move, y: move, duration, ease: 'Stepped'},
		{x: 0, y: 0, duration, ease: 'Stepped'}
	]
};
export const elevator_1 = {
	width: 4700,
	height: 400,
	key: PLATFORM1,
	tweens: file_1
};
export const elevator_2 = {
	width: 4700,
	height: 600,
	key: PLATFORM1,
	tweens: file_1
};
export const elevator_3 = {
	width: 4700,
	height: 800,
	key: PLATFORM1,
	tweens: file_1
};
export const elevator_4 = {
	width: 5000,
	height: 200,
	key: PLATFORM1,
	tweens: file_2
};
export const elevator_5 = {
	width: 5000,
	height: 400,
	key: PLATFORM1,
	tweens: file_2
};
export const cross = {
	width: 7900,
	height: 610,
	key: PLATFORM2,
	tweens: [
		{x: -100, y: 0, duration: 20000, ease: 'Stepped'},
		{x: 100, y: 0, duration: 20000, ease: 'Stepped'}
	]
};
