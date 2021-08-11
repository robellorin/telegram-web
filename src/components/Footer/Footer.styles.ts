import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';

const wrapper: CSSProperties = {
  minHeight: 60,
  height: 'fit-content',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden'
};

const attachIcon: CSSProperties = {
  transform: 'rotate(45deg)',
  marginBottom: 2
};

const messageBox: CSSProperties = {
  width: '100%',
  background: 'transparent',
  color: '#ffffff',
  minHeight: 32,
  resize: 'none',
  '&:focus-visible': {
    outline: 'none'
  },
  '&:after': {
    display: 'none'
  }
}

const mediaWrapper: CreateCSSProperties = {
  background: 'rgb(31, 41, 55)',
  width: (props: any) => (props.openMediaPopover ? 340 : 0),
  transition: 'width 0.1s',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 70,
  right: 10
}

export const styles = createStyles({
  wrapper,
  attachIcon,
  messageBox,
  mediaWrapper
});
