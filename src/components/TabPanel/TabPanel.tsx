import React from 'react';
import { ITabPanelProps } from './TabPanel.types';

export const TabPanel: React.FunctionComponent<ITabPanelProps> = ({children, value, index, ...restProps}) => {

	return (
		<div
      role="tabpanel"
			hidden={value !== index}
      {...restProps}
    >
			{value === index && (
				<>
					{children}
				</>
      )}
    </div>
	);
};
