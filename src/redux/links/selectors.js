import { NAME } from './reducer'

const stateSelector = state => state[NAME]

export const linksSelector = stateSelector
