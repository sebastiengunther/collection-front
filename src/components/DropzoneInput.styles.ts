import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {},
  preview: {
    backgroundColor: theme.colors.gray[2],
    border: '1px solid',
    borderColor: theme.colors.gray[4],
    borderRadius: '8px',
    paddingTop: '100%',
    position: 'relative',
    width: '100%'
  },
  image: {
    borderRadius: '8px',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  dropzone: {
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: '8px',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[4], 0.25)
    }
  },
  icon: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  },
  label: {},
  button: {
    backgroundColor: theme.colors.gray[0],
    border: '1px solid',
    borderColor: theme.colors.gray[4],
    borderRadius: '8px',
    color: theme.colors.dark[9],
    '&:hover': {
      backgroundColor: theme.colors.gray[2]
    }
  },
  error: {}
}));
