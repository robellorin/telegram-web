import React from 'react';
import { Box, BoxProps, makeStyles } from '@material-ui/core';
import { styles } from './StickerPopover.styles';
import { LottieView } from 'components';

const useStyles = makeStyles(styles);
const stickerList = [
	'bee-lieve.json',
	'fox-animation.json',
	'goldcoinbox.json',
	'groovyWalk.json',
	'heart-fill.json',
	'illustration-empty-pos.json',
	'jooey-at-tgsticker-sticker.json',
	'olympics-run-animation.json',
	'rush-pizza-delivery-blue.json',
	'smiling-girl.json',
	'bee-lieve.json',
	'fox-animation.json',
	'goldcoinbox.json',
	'groovyWalk.json',
	'heart-fill.json',
	'illustration-empty-pos.json',
	'jooey-at-tgsticker-sticker.json',
	'olympics-run-animation.json',
	'rush-pizza-delivery-blue.json',
	'smiling-girl.json',
	'bee-lieve.json',
	'fox-animation.json',
	'goldcoinbox.json',
	'groovyWalk.json',
	'heart-fill.json',
	'illustration-empty-pos.json',
	'jooey-at-tgsticker-sticker.json',
	'olympics-run-animation.json',
	'rush-pizza-delivery-blue.json',
	'smiling-girl.json',
	'bee-lieve.json',
	'fox-animation.json',
	'goldcoinbox.json',
	'groovyWalk.json',
	'heart-fill.json',
	'illustration-empty-pos.json',
	'jooey-at-tgsticker-sticker.json',
	'olympics-run-animation.json',
	'rush-pizza-delivery-blue.json',
	'smiling-girl.json'
]

export const StickerPopover: React.FunctionComponent<BoxProps> = (props) => {
	const classes = useStyles();
	return (
		<Box className={classes.stickersWrapper} {...props}>
			<div className="flex flex-wrap h-fit-content">
			{
				stickerList.map((sticker, index) => (
					<LottieView key={index} stickerName={sticker}></LottieView>
				))
			}
			</div>
		</Box>
	);
};
