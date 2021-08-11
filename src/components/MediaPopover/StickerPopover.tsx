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
		<div className="h-full">
		{
				stickerList.map((group, index) => (
					<div key={`group-${index}`}>
						<div className="text-white pt-4 pl-3">{group.groupName}</div>
						<div className="flex flex-wrap h-fit-content">
						{
							group.data.map((sticker, index) => (
								<LottieView key={index} stickerName={sticker} onHandleClick={onClickSticker}></LottieView>
							))}
							</div>
					</div>
			))
		}
			</div>
	);
};
