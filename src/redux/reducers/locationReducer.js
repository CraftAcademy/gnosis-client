
const initialState = {
  city: ''
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CITY':
      return {
        city: action.city
      }
    default:
      return state
  }
}

export default locationReducer