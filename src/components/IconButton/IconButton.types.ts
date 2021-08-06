import { IconButtonProps } from '@material-ui/core';
export interface IIconButtonProps extends Omit<IconButtonProps, 'size'> {
  className?: string;
  isSecondary?: boolean;
}