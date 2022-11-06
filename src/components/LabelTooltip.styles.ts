import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  label: {},
  button: {
    backgroundColor: 'transparent',
    color: theme.colors.dark[9],
    height: 'auto',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.colors.dark[9]
    }
  },
  tooltip: {}
}));
