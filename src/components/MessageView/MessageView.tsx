import React from 'react';
import { IMessageViewProps } from './MessageView.types';
import { MessageRow } from 'components';

export const MessageView: React.FunctionComponent<IMessageViewProps> = ({ messageData }) => {
	const messagesEnd = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageData]);
	return (
		<div className="flex-1 overflow-auto p-3">
			{
				messageData.map((messageRow, index) => <MessageRow key={index} data={messageRow}></MessageRow>)
			}
			<div className="float-left clear-both" ref={messagesEnd} />
		</div>
	);
};
