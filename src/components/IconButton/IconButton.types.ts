import { IconButtonProps, BoxProps } from '@material-ui/core';
import React from 'react';
export interface IIconButtonProps extends Omit<IconButtonProps, 'size'> {
  className?: string;
  isSecondary?: boolean;
  onRenderPopoverComponent?: (props: BoxProps) => React.ReactElement;
  isHoverPopover?: boolean;
}