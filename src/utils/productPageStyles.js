export const productPageStyles = {
  productPageWrapper: {
    maxWidth: '1280px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productBox: {
    display: 'grid',
    gridTemplateColumns: [null, null, null, null, '1fr', '1fr .7fr'],
    gap: 0,
  },
  productImageWrapper: {
    justifyContent: 'center',
    pl: [0, 0, '55px'],
    pr: [0, 0, '55px'],
    pb: '10px',
    pt: '10px',
    maxWidth: [null, '65vw']
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
    ml: 'auto'
  },
  productDescription: {
    marginBlockStart: 0,
  },
  priceValue: {
    marginBlockStart: 0,
    fontWeight: 'body',
    ml: 'auto',
    mr: 'auto',
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
    fontSize: 1,
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