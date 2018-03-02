export const SET_LOCALE = 'SET_LOCALE'

const configReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        ...state,
        LOCALE: action.language,
        LANGUAGE: action.language.split('-')[0],
      }
    default:
      return state
  }
}

export default configReducer
