import React from 'react';
import { Popover as MuiPopover, PopoverProps, makeStyles } from '@material-ui/core';
import { styles } from './Popover.styles';

const useStyles = makeStyles(styles);

export const Popover: React.FunctionComponent<PopoverProps> = ({children, ...props}) => {
	const classes = useStyles();

	return (
		<MuiPopover className={classes.popover} classes={{ paper: classes.root }} elevation={3} {...props}>
				{children}
		</MuiPopover>
	);
};
