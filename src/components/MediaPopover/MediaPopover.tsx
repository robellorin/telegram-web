import React from 'react';
import { Box, BoxProps, Tabs, Tab, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { styles } from './MediaPopover.styles';
import { AppContext } from 'context';
import { TabPanel } from 'components';
import { StickerPopover } from './StickerPopover';

const useStyles = makeStyles(styles);

export const MediaPopover: React.FunctionComponent<BoxProps> = (props) => {
	const classes = useStyles();
	const { mediaType, setMediaType } = React.useContext(AppContext);
	
	return (
		<Box className={classes.root} {...props}>
			<Tabs
				classes={{root: classes.tabs, indicator: classes.indicator}}
				value={mediaType}
				onChange={(event, newValue) => setMediaType(newValue)}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
				aria-label="full width tabs example"
			>
			<Tab classes={{ root: classes.tab, selected: classes.selected }} label="EMOJI" />
				<Tab classes={{ root: classes.tab, selected: classes.selected }} label="Stickers" />
				<Tab classes={{ root: classes.tab, selected: classes.selected }} label="Gifs" />
			</Tabs>
			<SwipeableViews
        index={mediaType}
        onChangeIndex={(index: number) => setMediaType(index)}
			>
				<TabPanel value={mediaType} index={0}>Emoji</TabPanel>
				<TabPanel value={mediaType} index={1}>
					<StickerPopover />
				</TabPanel>
				<TabPanel value={mediaType} index={2}>Gifs</TabPanel>
			</SwipeableViews>
		</Box>
	);
};
