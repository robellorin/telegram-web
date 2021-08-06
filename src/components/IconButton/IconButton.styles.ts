import { CreateCSSProperties, createStyles } from '@material-ui/styles';

const root: CreateCSSProperties = {
    color: (props: any) => (props.isSecondary ? 'rgba(255, 255, 255, 0.7)' : '#50A2E9'),
    '&:hover': {
        color: '#50A2E9'
    }
};

export const styles = createStyles({
	root
});
