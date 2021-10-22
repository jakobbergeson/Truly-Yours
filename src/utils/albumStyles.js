export const albumStyles = {
  wrapper: {
    flexDirection: 'column',
  },
  titleBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    bg: '#f5f5f5',
    mt: 0,
    mb: 0,
  },
  trackListItem: {
    fontWeight: 400,
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
    mr: ['10px', null],
    ml: ['10px', null],
    bg: '#f5f5f5'
  },
  listenBox: {
    bg: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto'
  },
  iconBox: {
    justifyContent: 'space-between',
    width: 'auto'
  },
  streamIcon: {
    color: 'black',
    fontSize: 7,
    transition: 'opacity 450ms',
    '&:hover': {
      transition: 'opacity 125ms',
      opacity: .75
    }
  }
}