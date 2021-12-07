export const albumStyles = {
  wrapper: {
    flexDirection: 'column',
  },
  titleBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'body',
    mt: 0,
  },
  underline: {
    position: 'relative',
    right: '10%',
    width: '120%',
    height: '2px',
    backgroundColor: '#333333',
  },
  grid: {
    gridTemplateColumns: [null, null, null, null, '1fr', '1fr 1fr'],
    margin: [null, null, null, 'auto'],
    gap: ['20px', null, null, null, null, '110px'],
    pb: '10px'
  },
  tracklist: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'body',
    bg: 'gray',
    mt: 0,
    mb: 0,
    p: 0,
  },
  trackListItem: {
    fontWeight: 'body',
    fontSize: [3, 4],
    m: 0,
    pt: '.5rem',
    pb: '.5rem'
  },
  linkBox: {
    gridTemplateColumns: [null, null, null, null, '1fr', '1fr 1fr'],
    gap: ['20px', null, null, null, null, '110px'],
    mt: ['10px', null],
    mb: 'auto',
    bg: 'gray'
  },
  listenBox: {
    bg: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    fontWeight: 'body'
  },
  listenBoxChild: {
    fontWeight: 400,
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
    listStyleType: 'none',
    p: 0,
  },
  streamIcon: {
    color: 'black',
    fontSize: 54,
    transition: 'opacity 450ms',
    '&:hover': {
      transition: 'opacity 125ms',
      opacity: .75
    }
  }
}