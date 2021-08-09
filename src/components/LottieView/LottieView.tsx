import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import Lottie, {LottieOptions } from "lottie-react";
import { styles } from './LottieView.styles';
import { ILottieViewProps } from './LottieView.types';

const useStyles = makeStyles(styles);

export const LottieView: React.FunctionComponent<ILottieViewProps> = ({stickerName, className, styles, onHandleClick}) => {
	const classes = useStyles();
	const [options, setOptions] = React.useState<LottieOptions | null>(null);

	React.useEffect(() => {
		return () => {
			setOptions({
				animationData: {},
				loop: false,
				autoplay: false
			});
		}
	}, []);

	React.useEffect(() => {
		if (stickerName && stickerName.length) {
			import(`assets/stickers/${stickerName}`).then(({ default: path }) => {
				if (path) {
					setOptions({
						animationData: path,
						loop: true,
						autoplay: true
					});
				}
			});
		}
	}, [stickerName]);

	return (
		options ?
			<Lottie
				className={classNames(classes.root, className)} style={styles}
				{...options}
				onClick={() => onHandleClick?.(stickerName)}
			></Lottie>
		:
			<></>
  );
};
