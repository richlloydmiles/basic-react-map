import React from 'react'
import { connect } from 'react-redux'
import './Filter.css'
import { filterPeople } from '../../state/actions'

const Filter = (props) => {
  return (
    <div className={'filter'}>
      <input
        type="text"
        placeholder={'Filter people'}
        onChange={(event) => props.filterPeople(event.target.value)}
      />
    </div>
  )
}

function mapState(state) {
  return state
}

function mapDispatch(dispatch) {
  return {
    filterPeople: (search) => dispatch(filterPeople(search)),
  }
}

export default connect(mapState, mapDispatch)(Filter)