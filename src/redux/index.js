import config, { NAME as configName } from './config/reducer'
import links, { NAME as linksName } from './links/reducer'

export const reducers = {
  [configName]: config,
  [linksName]: links,
}
