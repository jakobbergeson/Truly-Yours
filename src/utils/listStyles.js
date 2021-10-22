export const listStyles = {
  musicList: {
    display: 'grid',
    listStyleType: 'none',
    margin: '0px',
    padding: '0px',
    gridTemplateColumns: [null, null, '1fr', '1fr 1fr']
  },
  musicListLink: {
    p: [null, null, null, '50px'],
    pb: ['10px', null],
    pt: ['10px', null],
  },
  videoList: {
    width: '100vw',
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: '1fr',
    p: 0,
    listStyle: 'none',
  }
}