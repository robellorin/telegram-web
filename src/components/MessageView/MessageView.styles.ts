import { CSSProperties, createStyles } from '@material-ui/styles';

const root: CSSProperties = {
    padding: 5
};

const textWrapper: CSSProperties = {
    borderRadius: 12,
    padding: '8px 10px',
    color: '#ffffff'
};

const stickerWrapper: CSSProperties = {
    padding: '8px 10px',
    color: '#ffffff',
    position: 'relative'
};

const infoWrapper: CSSProperties = {
    background: 'rgba(0, 0, 0, 0.3)',
    padding: 5,
    borderRadius: 10
}

const readIcon: CSSProperties = {
    fontSize: 16,
    marginRight: 5
}

export const styles = createStyles({
    root,
    textWrapper,
    stickerWrapper,
    infoWrapper,
    readIcon
});
