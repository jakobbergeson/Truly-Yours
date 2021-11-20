export const cartStyles = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    color: 'text',
    minWidth: '375px',
    width: ['100%', 'inherit']
  },
  scrollBox: {
    height: '100vh',
    overflowY: 'scroll',
    padding: '0 20px',
  },
  lineItemBox: {
    flexDirection: 'column',
    display: 'flex',
    paddingBottom: '235px',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 20px',
    position: 'sticky',
    background: 'white',
    zIndex: 60,
    top: 0,
    minHeight: '72px',
    boxShadow: '0 3px 30px rgb(0 0 0 / 8%)',
  },
  chevLeft: {
    cursor: 'pointer',
    fontSize: 'x-large',
    mr: '20px',
    color: 'red',
    transition: 'opacity 450ms',
    willChange: 'opacity',
    opacity: 1,
    '&:hover': {
      transition: 'opacity 125ms',
      willChange: 'opacity',
      opacity: .5,
    }
  },

  cartQuan: {
    fontSize: '14px',
    color: 'black',
  },

  checkoutBox: {
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    right: '0px',
    flexDirection: 'column',
    display: 'flex',
    padding: '20px',
    bg: 'white',
    boxShadow: 'rgb(0 0 0 / 8%) 0px -3px 30px',
  },

  disclaimer: {
    marginBlockStart: 0,
    marginBlockEnd: '20px',
    fontSize: '13px',
  },

  checkoutButton: {
    alignItems: 'center',
    bg: 'rgb(194, 194, 194)',
    minWidth: '200px',
    borderStyle: 'none',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    letterSpacing: '.17em',
    width: '100%',
    padding: '12px',
    cursor: 'pointer',
    transition: 'all .8s cubic-bezier(.19, 1, .22, 1)',
    border: '1px transparent solid',
    fontSize: '16px',
    '&:hover': {
      color: 'text',
      bg: 'transparent',
      transition: 'all .8s cubic-bezier(.19, 1, .22, 1)',
      border: '1px #333333 solid',
    }
  },

  emptyStateContainer: {
    textAlign: 'center',
    ml: 'auto',
    mr: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ' column',
  },

  emptyStateHeading: {
    color: '#333333',
    fontSize: '22px',
    fontWeight: 'bold',
    mb: 0,
  },

  emptyStateLink: {
    display: 'inline-block',
    color: 'red',
    mt: 0,
    fontSize: 22,
    transition: 'opacity 450ms',
    willChange: 'opacity',
    opacity: 1,
    '&:hover': {
      willChange: 'opacity',
      transition: 'opacity 325ms',
      opacity: .6,
    }
  },

}