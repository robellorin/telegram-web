import React from 'react';
import { TextareaAutosize, makeStyles } from '@material-ui/core';
import { styles } from './Footer.styles';
import { IFooterProps } from './Footer.types';
import { Message } from 'models';
import classNames from 'classnames';
import { IconButton, StickerPopover } from 'components';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import KeyboardVoiceOutlinedIcon from '@material-ui/icons/KeyboardVoiceOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';


const useStyles = makeStyles(styles);

export const Footer: React.FunctionComponent<IFooterProps> = ({onHandleSendMessage}) => {
  const classes = useStyles();
  const [message, setMessage] = React.useState('');

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.persist();
      event.preventDefault();
      if (message && message.length) {
        const messageItem: Message = {
          content: message,
          type: 'text',
          date: new Date(),
          isOwner: true,
          isRead: true
        }
        onHandleSendMessage(messageItem);
        setMessage('');
      }
    }
  }

	return (
		<div className={classNames(classes.wrapper, 'flex items-end bg-gray-700 px-4')}>
      <IconButton className={classes.attachIcon} isSecondary>
        <AttachFileOutlinedIcon></AttachFileOutlinedIcon>
      </IconButton>
      <div className="flex-1 px-3">
        <TextareaAutosize
          className={classes.messageBox}
          value={message}
          placeholder="Write a message..."
          onKeyDown={onKeyPress}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <IconButton
        isSecondary
        isHoverPopover
        onRenderPopoverComponent={() => (<StickerPopover />)}
      >
        <EmojiEmotionsOutlinedIcon></EmojiEmotionsOutlinedIcon>
      </IconButton>
      <IconButton isSecondary>
        <KeyboardVoiceOutlinedIcon></KeyboardVoiceOutlinedIcon>
      </IconButton>
		</div>
	);
};
