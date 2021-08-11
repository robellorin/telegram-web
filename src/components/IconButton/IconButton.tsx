import React from 'react';
import classNames from 'classnames';
import { IconButton as MuiIconButton, makeStyles } from '@material-ui/core';
import { styles } from './IconButton.styles';
import { IIconButtonProps } from './IconButton.types';

const useStyles = makeStyles(styles);

export const IconButton: React.FunctionComponent<IIconButtonProps> = ({
	children,
	className,
	isSecondary,
	...props
}) => {
	const classes = useStyles({ isSecondary });

	return (
		<MuiIconButton
			className={classNames(classes.root, className)}
			{...props}
		>
			{children}
		</MuiIconButton>
	);
};
