import React from 'react';
import classNames from 'classnames';
import { IconButton as MuiIconButton, makeStyles } from '@material-ui/core';
import { AppContext } from 'context';
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
	const { popoverAnchorEl, setPopoverAnchorEl } = React.useContext(AppContext);
	const [onPopover, setOnPopover] = React.useState(false);
	const [open, setOpen] = React.useState(Boolean(popoverAnchorEl));

	React.useEffect(() => {
		setOpen(Boolean(popoverAnchorEl))
	}, [popoverAnchorEl]);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (isHoverPopover)	setPopoverAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setTimeout(() => {
			if (!onPopover) {
				setPopoverAnchorEl(null);
			}
		}, 100);
	};

	const handleLeavePopover = () => {
		setPopoverAnchorEl(null);
		setOnPopover(false);
	}

	return (
		<div
			aria-owns={Boolean(popoverAnchorEl) ? 'mouse-over-popover' : undefined}
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
				isHoverPopover && popoverAnchorEl &&
				< Popover
					id={open ? 'mouse-over-popover' : undefined}
					open={open}
					anchorEl={popoverAnchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					onClose={handlePopoverClose}
					onMouseEnter={() => setOnPopover(true)}
					onMouseLeave={handleLeavePopover}
					disableRestoreFocus
				>
					{onRenderPopoverComponent?.({
						onMouseEnter: () => setOnPopover(true),
						onMouseLeave: handleLeavePopover
					})}
				</Popover>
			}
		</div>
	);
};
