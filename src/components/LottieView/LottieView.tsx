import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import Lottie, {LottieOptions, LottieRef } from "lottie-react";
import { styles } from './LottieView.styles';
import { ILottieViewProps } from './LottieView.types';
import { AppContext } from 'context';
import useInView from "react-cool-inview";

const useStyles = makeStyles(styles);

export const LottieView: React.FunctionComponent<ILottieViewProps> = ({stickerName, className, styles, isMessage, onHandleClick}) => {
	const classes = useStyles();
	const [options, setOptions] = React.useState<LottieOptions | null>(null);
	const lottieRef: LottieRef = React.useRef(null);
	const { openMediaPopover } = React.useContext(AppContext);
	const { observe, inView } = useInView({
	});
	
	React.useEffect(() => {
		const checkInView = () => {
			if (inView) {
				lottieRef.current?.play();
			} else {
				lottieRef.current?.stop();
			}
		}
		if (isMessage) {
			checkInView();
		} else {
			if (openMediaPopover) {
				checkInView();
			} else {
				lottieRef.current?.stop();
			}
		}
	}, [openMediaPopover, isMessage, inView]);

	React.useEffect(() => {
		if (stickerName && stickerName.length) {
			import(`assets/stickers/${stickerName}`).then(({ default: path }) => {
				if (path) {
					setOptions({
						animationData: path,
						loop: true,
						autoplay: false,
						onDOMLoaded: () => {
							lottieRef.current?.play();
						},
					});
				}
			});
		}
	}, [stickerName]);

	return (
		options ?
			<div ref={observe}>
						<Lottie
							lottieRef={lottieRef}
							className={classNames(classes.root, className)} style={styles}
							{...options}
							onClick={() => onHandleClick?.(stickerName)}
						/>
				</div>
		:
			<></>
  );
};
