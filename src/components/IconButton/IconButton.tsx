import React from 'react';
import classNames from 'classnames';
import { IconButton as MuiIconButton, makeStyles } from '@material-ui/core';
import { styles } from './IconButton.styles';
import { IIconButtonProps } from './IconButton.types';
import { Popover } from 'components';

const useStyles = makeStyles(styles);

export const IconButton: React.FunctionComponent<IIconButtonProps> = ({
	children,
	className,
	isSecondary,
	isHoverPopover,
	onRenderPopoverComponent,
	...props
}) => {
	const classes = useStyles({ isSecondary });
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget);
	};
	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div
			aria-owns={open ? 'mouse-over-popover' : undefined}
			aria-haspopup="true"
			onMouseEnter={handlePopoverOpen}
			onMouseLeave={handlePopoverClose}
		>
			<MuiIconButton
				className={classNames(classes.root, className)}
				
				{...props}
			>
				{children}
			</MuiIconButton>
			{
				isHoverPopover &&
				< Popover
					id={open ? 'mouse-over-popover' : undefined}
					open={open}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					onClose={handlePopoverClose}
					disableRestoreFocus
				>
					{onRenderPopoverComponent?.()}
				</Popover>
			}
		</div>
	);
};
