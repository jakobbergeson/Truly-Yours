export const lineItemStyles = {

  lineWrap: {
    boxSizing: 'border-box',
    minWidth: '0px',
    justifyContent: ['space-between', 'start', 'start', 'start', 'space-between'],
    alignItems: 'center',
    display: 'flex',
    borderBottom: '1px solid rgb(122, 122, 122)',
    padding: '20px 0',
    overflow: 'hidden',
  },
  lineImage: {
    m: '0px 20px 0px 0px',
    height: '100px',
    width: '100px',
    minWidth: '100px',
    objectFit: 'cover',
  },
  lineInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  lineVariant: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    textTransform: 'capitalize',
  },
  lineDesc: {
    maxWidth: ['150px', '250px', '300px', '150px', '150px'],
  },
  title: {
    fontSize: '14px',
    fontWeight: 'heading',
    margin: '0 25px 0 0',
  },
  linePrice: {
    m: '0px 0px 26px',
    minWidth: '0px',
    flexDirection: 'column',
    display: 'flex',
    minHeight: '44px',
    fontSize: '14px',
  },

  lineQuan: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '13px',
    textTransform: 'capitalize',
    pb: '4px',
  },
  remove: {
    fontFamily: 'inherit',
    fontSize: '13px',
    letterSpacing: '.17em',
    color: 'red',
    borderStyle: 'none',
    bg: 'transparent',
    cursor: 'pointer',
    p: 0,
    transition: 'opacity 450ms',
    willChange: 'opacity',
    '&:hover': {
      willChange: 'opacity',
      transition: 'opacity 325ms',
      opacity: .6,
    }
  },
  totals: {
    textAlign: 'right',
  },

}