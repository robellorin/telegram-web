import { CSSProperties, createStyles } from '@material-ui/styles';

const root: CSSProperties = {
  width: 340,
  height: 450,
  pointerEvents: 'all',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column'
};

const tabs: CSSProperties = {
  boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
}

const indicator: CSSProperties = {
  display: 'none'
}

const tab: CSSProperties = {
  minWidth: 'unset',
  color: 'rgba(255, 255, 255, 0.7)'
}

const selected: CSSProperties = {
  color: '#50A2E9 !important'
}

export const styles = createStyles({
  root,
  tabs,
  indicator,
  tab,
  selected
});
