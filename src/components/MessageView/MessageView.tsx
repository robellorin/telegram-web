import React from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './MessageView.styles';
import { IMessageViewProps } from './MessageView.types';

const useStyles = makeStyles(styles);

export const MessageView: React.FunctionComponent<IMessageViewProps> = ({messageData}) => {
	const classes = useStyles();

	return (
		<div className="flex-1"></div>
	);
};
