import React from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './Header.styles';
import classNames from 'classnames';
import { IconButton, Avatar } from 'components';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { FIRST_NAME, LAST_NAME  } from 'constants/index';

const useStyles = makeStyles(styles);

export const Header: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<div className={classNames(classes.wrapper, 'flex justify-between items-center bg-gray-700 px-4')}>
      <div className='flex iterms-center cursor-pointer flex-nowrap overflow-hidden'>
        <Avatar firstName={FIRST_NAME} lastName={LAST_NAME}></Avatar>
        <div className='flex flex-col justify-between ml-4 overflow-hidden'>
          <div className='primaryText truncate'>{`${FIRST_NAME} ${LAST_NAME}`}</div>
          <div className='secondaryText truncate text-sm'>last seen recently</div>
        </div>
      </div>
      <div className="flex item-center">
        <IconButton>
          <PhoneOutlinedIcon></PhoneOutlinedIcon>
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </IconButton>
        <IconButton>
          <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>
        </IconButton>
      </div>
		</div>
	);
};
