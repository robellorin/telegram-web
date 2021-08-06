import { CSSProperties, createStyles } from '@material-ui/styles';

const root: CSSProperties = {
    padding: 5
};

const messageWrapper: CSSProperties = {
    borderRadius: 12,
    padding: '8px 10px',
    color: '#ffffff'
};

const readIcon: CSSProperties = {
    fontSize: 16,
    marginRight: 5
}

export const styles = createStyles({
    root,
    messageWrapper,
    readIcon
});
