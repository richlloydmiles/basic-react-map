const { filterPeople } = require('../common/utils')
const initialState = {
  people: [ ...require('../data/people') ],
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_PEOPLE':
      return {
        people: filterPeople(initialState.people, action.payload)
      }
    default:
      return state
  }
}

export default rootReducer
