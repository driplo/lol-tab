import { SET_LOCALE } from '../reducers/config'

export const setLanguage = props => {
  props.dispatch({
    type: SET_LOCALE,
    language: navigator.language,
  })
}
