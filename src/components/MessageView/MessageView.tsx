import React from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './MessageView.styles';
import moment from 'moment';
import classNames from 'classnames';
import { IMessageViewProps } from './MessageView.types';
import { MessageRow } from 'components';

const useStyles = makeStyles(styles);

export const MessageView: React.FunctionComponent<IMessageViewProps> = ({ messageData }) => {
	const classes = useStyles();
	const messagesEnd = React.useRef<HTMLDivElement>(null);
	let lastDate = '';

	React.useEffect(() => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
	}, [messageData]);

	return (
		<div className="flex-1 overflow-auto p-3">
			{
				messageData.map((messageRow, index) => {
					const messageDate = moment(messageRow.date).format('MMMM D');
					const isNewDate = messageDate !== lastDate;
					if (isNewDate) lastDate = messageDate;
					
					return (
						<div key={index}>
							{
								isNewDate &&
								<div className={classNames(classes.infoWrapper, "flex justify-center text-white w-max mx-auto")}>{messageDate}</div>
							}
							<MessageRow data={messageRow}></MessageRow>
						</div>
				)})
			}
			<div className="float-left clear-both" ref={messagesEnd} />
		</div>
	);
};
