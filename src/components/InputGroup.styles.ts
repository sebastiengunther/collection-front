import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {},
  label: {},
  group: {
    display: 'flex',
    width: '100%'
  },
  input: {
    display: 'flex',
    width: '100%',
    input: {
      borderBottomRightRadius: '0 !important',
      borderTopRightRadius: '0 !important',
      flex: '1 1 auto',
      minWidth: 0,
      width: '1%'
    }
  },
  text: {
    alignItems: 'center',
    backgroundColor: theme.colors.gray[2],
    border: '1px solid',
    borderBottomLeftRadius: '0 !important',
    borderColor: theme.colors.gray[4],
    borderRadius: '8px',
    borderTopLeftRadius: '0 !important',
    display: 'flex',
    marginLeft: '-1px',
    padding:'0.375rem 0.75rem',
    whiteSpace: 'nowrap'
  },
  error: {}
}));
