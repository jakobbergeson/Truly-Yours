export const productPageStyles = {
  productPageWrapper: {
    maxWidth: '1280px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  shopLink: {
    display: 'flex',
    textDecoration: 'none',
    position: ['sticky', 'fixed'],
    top: '102px',
    color: 'inherit',
    transition: 'opacity 450ms',
    willChange: 'opacity',
    opacity: 1,
    '&:hover': {
      transition: 'opacity 125ms',
      willChange: 'opacity',
      opacity: .5,
    },
    header: {
      mt: 0,
      mb: 0,
      ml: 2
    }
  },
  productBox: {
    display: 'grid',
    gridTemplateColumns: [null, null, null, null, '1fr', '1fr 1fr'],
    gap: [0, 0, 0, 0, 0, 100],
    pt: ['20px', 0],
  },
  productImageWrapper: {
    justifyContent: 'center',
    pl: [0, 0, '55px'],
    pr: [0, 0, '55px'],
    pb: '10px',
    pt: '10px',
    maxWidth: [null, '65vw'],
  },
  productDescriptionWrapper: {
    justifySelf: 'center',
    flexDirection: 'column',
    pl: [0, 0, '55px'],
    pr: [0, 0, '55px'],
    pb: '10px',
    pt: '10px',
    textAlign: 'center',
    maxWidth: [null, '60vw']
  },
  productTitle: {
    fontWeight: 'body',
    mt: 0,
    mr: 'auto',
    ml: 'auto',
    mb: [0, 'inherit'],
  },
  productDescription: {
    marginBlockStart: 0,
  },
  priceValue: {
    marginBlockStart: 0,
    fontWeight: 'body',
    ml: 'auto',
    mr: 'auto',
    mb: '16px',
  },
  variantWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: 'none',
    alignItems: 'center',
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingBlockStart: 0,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    paddingBlockEnd: 0,
  },
  selectVariant: {
    bg: 'lightgray',
    borderStyle: 'none',
    cursor: 'pointer',
    color: 'primary',
    mb: 3,
    mt: 0,
    fontSize: '16px',
    fontFamily: 'body',
    letterSpacing: '.17em',
    p: 2,
    transition: 'all 450ms',
    '&:hover': {
      transition: 'all 125ms',
      bg: 'tertiary'
    }
  },
  addToCart: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 3,
  }
}