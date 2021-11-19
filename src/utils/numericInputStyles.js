export const numericInputStyles = {
  numericWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    fontSize: 0,
    'button': {
      position: 'relative',
      left: '40%',
      bottom: '40%',
      border: 'none',
      p: 0,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      fontSize: 1,
      transition: 'opacity 450ms',
      '&:hover': {
        transition: 'opacity 125ms',
        opacity: .75,
      },
      '&:active': {
        bg: 'lightgray',
      },
      'span': {
        display: ['inline'],
        p: 0,
        fontSize: 'inherit'
      },
    },
  },
  inputTitle: {
    fontSize: 'inherit',
    fontWeight: 'body',
    m: 0
  },
  input: {
    textAlign: 'center',
    p: 2,
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    fontWeight: 'body',
    fontSize: 1,
  }
}