import links from '../../data/links'

export const NAME = 'LINKS'

const initialState = {
  links,
}

const reducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    default: {
      return state
    }
  }
}

export default reducer
