export const numericInputStyles = {
  numericWrapper: {
    display: 'inline-grid',
    gridTemplateColumns: '1fr min-content',
    gridTemplateAreas: '"input increment" "input decrement"',
    bg: 'darkgray',
    borderRadius: '10px',
    overflow: 'hidden',
    fontSize: 4,
    'button': {
      border: 'none',
      p: 1,
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      fontSize: 'inherit',
      transition: 'opacity 450ms',
      '&:hover': {
        transition: 'opacity 125ms',
        opacity: .75,
      },
      '&:active': {
        bg: 'lightgray',
      },
      'span': {
        display: ['inline', 'none'],
        p: 0,
        fontSize: 4
      },
      'svg': {
        display: ['none', 'inline'],
        p: 0,
        fontSize: 4
      }
    },
  },
  input: {
    gridArea: 'input',
    textAlign: 'center',
    p: 2,
    alignSelf: 'stretch',
    width: '5ch',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: ' 0 1px 0 0',
    fontWeight: 'body',
    fontSize: 2,
  }
}