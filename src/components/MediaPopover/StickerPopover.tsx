import React from 'react';
import { AppContext } from 'context';
import { Message } from 'models';
import { LottieView } from 'components';
import { stickerList } from './stickerData';


export const StickerPopover: React.FunctionComponent = () => {
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
    <div className="flex flex-wrap h-fit-content">
    {
      stickerList.map((sticker, index) => (
        <LottieView key={index} stickerName={sticker} onHandleClick={onClickSticker}></LottieView>
      ))
    }
    </div>
	);
};
