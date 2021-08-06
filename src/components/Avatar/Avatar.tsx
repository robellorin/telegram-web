import React from 'react';
import { Avatar as MuiAvatar, makeStyles } from '@material-ui/core';
import { styles } from './Avatar.styles';
import { IAvatarProps } from './Avatar.types';

const useStyles = makeStyles(styles);

export const Avatar: React.FunctionComponent<IAvatarProps> = ({src, firstName, lastName}) => {
	const classes = useStyles();

	return (
		src ?
			<MuiAvatar className={classes.root} src={src}>
			</MuiAvatar>
		: <MuiAvatar className={classes.root}>
				{firstName && firstName.length ? firstName.slice(0, 1) : ''}
				{lastName && lastName.length ? lastName.slice(0, 1) : ''}
			</MuiAvatar>
	);
};
