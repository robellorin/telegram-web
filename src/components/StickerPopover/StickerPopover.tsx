import React from 'react';
import { Box, BoxProps, makeStyles } from '@material-ui/core';
import { styles } from './StickerPopover.styles';
import { AppContext } from 'context';
import { Message } from 'models';
import { LottieView } from 'components';
import { stickerList } from './stickerData';

const useStyles = makeStyles(styles);


export const StickerPopover: React.FunctionComponent<BoxProps> = (props) => {
	const classes = useStyles();
	const { messageData, setMessageData } = React.useContext(AppContext);
	
	const onClickSticker = (stickerName: string) => {
		const messageItem: Message = {
			content: stickerName,
			type: 'sticker',
			date: new Date(),
			isOwner: true,
			isRead: true
		}
		setMessageData([...messageData, messageItem]);
	}
	return (
		<Box className={classes.stickersWrapper} {...props}>
			<div className="flex flex-wrap h-fit-content">
			{
				stickerList.map((sticker, index) => (
					<LottieView key={index} stickerName={sticker} onHandleClick={onClickSticker}></LottieView>
				))
			}
			</div>
		</Box>
	);
};
