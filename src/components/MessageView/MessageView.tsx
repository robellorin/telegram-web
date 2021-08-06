import React from 'react';
import { IMessageViewProps } from './MessageView.types';
import { MessageRow } from 'components';

export const MessageView: React.FunctionComponent<IMessageViewProps> = ({messageData}) => {
	return (
		<div className="flex-1 p-3">
			{
				messageData.map((messageRow, index) => <MessageRow key={index} data={messageRow}></MessageRow>)
			}
		</div>
	);
};
