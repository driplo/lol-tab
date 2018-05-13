import SidePanel from './SidePanel'
import { connect } from 'react-redux'
import { linksSelector } from '../../redux/links/selectors'

export default connect(linksSelector)(SidePanel)
