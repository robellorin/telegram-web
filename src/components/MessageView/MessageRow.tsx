import React from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './MessageView.styles';
import classNames from 'classnames';
import { IMessageRowProps } from './MessageView.types';
import moment from 'moment';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import { LottieView } from 'components';

const useStyles = makeStyles(styles);

export const MessageRow: React.FunctionComponent<IMessageRowProps> = ({data}) => {
	const classes = useStyles({isOwner: data.isOwner});

	return (
		<div className={classNames(classes.root, 'flex', { 'justify-start': !data.isOwner, 'justify-end': data.isOwner })}>
			{data.type === 'text' &&
				<div className={classNames(classes.textWrapper, { 'bg-blue-900': data.isOwner, 'bg-gray-700': !data.isOwner}, 'relative')}>
					<div>
						{data.content}
						<span className="opacity-0">
							<DoneAllOutlinedIcon className={classes.readIcon}></DoneAllOutlinedIcon>
							{moment(data.date).format('HH:mm A')}
						</span>
					</div>
					<div className="secondaryText absolute right-2 bottom-1 text-xs">
						{
							data.isRead && data.isOwner &&
							<DoneAllOutlinedIcon className={classes.readIcon}></DoneAllOutlinedIcon>
						}
						{moment(data.date).format('HH:mm A')}
					</div>
				</div>
			}
			{data.type === 'sticker' &&
				<div className={classes.stickerWrapper}>
					<LottieView styles={{ width: 192, height: 192 }} stickerName={data.content}></LottieView>
				<div className={classNames(classes.infoWrapper, "secondaryText absolute right-2 bottom-1 text-xs")}>
						{
							data.isRead && data.isOwner &&
							<DoneAllOutlinedIcon className={classes.readIcon}></DoneAllOutlinedIcon>
						}
						{moment(data.date).format('HH:mm A')}
					</div>
				</div>
			}
		</div>
	);
};
