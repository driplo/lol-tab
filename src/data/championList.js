import champions from './champions.json'
import _ from 'lodash'

const objKeys = Object.keys(champions.data)
const formattedOptions = objKeys.map(key => {
  return {
    value: key,
    label: champions.data[key].name,
  }
})

const sortedChampions = _.sortBy(formattedOptions, 'label')

export default sortedChampions
