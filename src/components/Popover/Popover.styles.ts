import { CSSProperties, createStyles } from '@material-ui/styles';

const popover: CSSProperties = {
    pointerEvents: 'none',
};
const root: CSSProperties = {
    background: 'rgb(31, 41, 55)'
};

export const styles = createStyles({
    popover,
	root
});
