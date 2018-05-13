import { property } from 'lodash'
export const NAME = 'CONFIG'
export const SET_LOCALE = `${NAME}/SET_LOCALE`

const initialState = {
  LOCALE: 'en-EN',
  LANGUAGE: 'en',
}

const reducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case SET_LOCALE: {
      return {
        ...state,
        LOCALE: property('language')(action),
        LANGUAGE: property('language')(action).split('-')[0],
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
