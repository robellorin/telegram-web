import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps, makeStyles } from '@material-ui/core';
import { styles } from './IconButton.styles';

const useStyles = makeStyles(styles);

export const IconButton: React.FunctionComponent<IconButtonProps> = ({children, ...props}) => {
	const classes = useStyles();

	return (
		<MuiIconButton className={classes.root} {...props}>
			{children}
		</MuiIconButton>
	);
};
