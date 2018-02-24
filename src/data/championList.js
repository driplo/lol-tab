import champions from './champions.json'
import { sortBy, keys } from 'lodash'

const formattedOptions = keys(champions.data).map(key => ({
  value: key,
  label: champions.data[key].name,
}))

const sortedChampions = sortBy(formattedOptions, 'label')

export default sortedChampions
