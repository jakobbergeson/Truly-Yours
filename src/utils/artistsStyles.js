export const artitsStyles = {
  artistWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  galImgBox: {
    justifyContent: 'space-around',
  },
  galImgBtn: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
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
      top: '25%',
      left: '25%',
      right: '25%',
      bottom: '25%',
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
    }
  },
  blogBox: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    backgroundColor: '#ffffff',
    p: '.5rem',
    color: '#333333'
  },
  postDate: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black',
    height: '50px',
    padding: ' 9px',
    maxWidth: 'max-content',
  }
}