const defaultState = {
  optionBoxActive: false,
}

const options = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_OPTIONBOX':
      return { ...state, optionBoxActive: !state.optionBoxActive }
    default:
      return state
  }
}

export default options
