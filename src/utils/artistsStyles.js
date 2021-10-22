export const artistsStyles = {
  artistWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  banImgBox: {
    width: ['200px', '250px', null, '300px', null, '400px', '500px'],
    justifyContent: 'center'
  },
  galImgBox: {
    justifyContent: 'space-between',
  },
  galImgBtn: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    p: 0,
    width: ['75px', null, '100px', null, '150px'],
    m: '1.5rem',
  },
  blogBox: {
    display: 'flex',
    justifyContent: 'space-around',
    textDecoration: 'none',
    backgroundColor: '#ffffff',
    p: '.5rem',
    color: '#333333'
  },
  postDate: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black',
    padding: ' 9px',
    maxWidth: 'max-content',
  },
  blogTitle: {
    m: 0,
    fontSize: [4],
    fontWeight: 'body',
  },
  blogDivider: {
    width: '3px',
    height: 'auto',
    mr: '10px',
    ml: '10px',
    backgroundColor: 'text',
  },
  modal: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '15%',
      left: '15%',
      right: '15%',
      bottom: '15%',
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
    }
  },
}