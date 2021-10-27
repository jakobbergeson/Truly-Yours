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
    alignItems: 'center',
  },
  productTitle: {
    fontWeight: 'body',
    mt: 0,
  },
  productDescription: {
    marginBlockStart: 0,
  },
  priceValue: {
    marginBlockStart: 0,
  },
  optionsWrapper: {
    display: 'grid',
    border: 'none',
    gridTemplateColumns: [null, null, null, null, '1fr', '1fr 1fr'],
    gap: 4,
  }
}