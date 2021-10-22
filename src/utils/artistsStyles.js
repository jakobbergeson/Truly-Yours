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
  },
  galImgBtn: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    p: 0,
    width: ['100px', null, '200px', null, '250px'],
    m: ['.5rem', '1rem'],
  },
  blogBox: {
    display: 'flex',
    justifyContent: 'space-around',
    textDecoration: 'none',
    backgroundColor: 'gray',
    p: '.5rem',
    color: '#333333'
  },
  postDate: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black',
    padding: ['3px', '9px'],
    maxWidth: 'max-content',
  },
  postDateChild: {
    m: 0,
    textAlign: ['center', 'left']
  },
  blogTitle: {
    m: 0,
    fontSize: [2, 4],
    fontWeight: 'body',
    textAlign: ['center', 'left']
  },
  blogDivider: {
    width: ['2px'],
    height: 'auto',
    mr: [0, '10px'],
    ml: ['15px', '10px'],
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
      cursor: 'pointer',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 'max-content',
      maxHeight: 'max-content',
      margin: 'auto',
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      cursor: 'default',
    }
  },
}