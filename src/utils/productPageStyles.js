export const productPageStyles = {
  productPageWrapper: {
    maxWidth: '1280px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productBox: {
    display: 'grid',
    gridTemplateColumns: [null, null, null, null, '1fr', '1fr 1fr'],
    gap: 0,
  },
  productImageWrapper: {
    pl: [0, 0, '55px'],
    pr: [0, 0, '55px'],
    pb: '10px',
    pt: '10px',
    justifyContent: 'center',
  },
  productDescriptionWrapper: {
    pl: [0, 0, '55px'],
    pr: [0, 0, '55px'],
    pb: '10px',
    pt: '10px',
    flexDirection: 'column',
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
    border: 'none',
    alignItems: 'flex-start',
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingBlockStart: 0,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    paddingBlockEnd: 0,
  },
  selectVariant: {
    bg: 'darkgray',
    borderStyle: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    mb: 3,
    mt: 0,
    fontSize: 2,
    fontFamily: 'body',
    letterSpacing: '.17em',
    p: 3,
    transition: 'opacity 450ms',
    '&:hover': {
      transition: 'opacity 125ms',
      opacity: .75,
    }
  },
  addToCart: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gap: 3,
  }
}