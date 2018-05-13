import { SET_LOCALE } from './reducer'

export const setLocale = language => ({
  type: SET_LOCALE,
  language,
})
