import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },

  img: {
    display: 'block',
  },

  // '.container': {
  //   width: '100%',
  //   maxWidth: '70rem',
  //   marginRight: 'auto',
  //   marginLeft: 'auto',
  // },
})
