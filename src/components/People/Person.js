import React from 'react'
import PropTypes from 'prop-types'

const Person = props => {
  return (
    <div className={'person'}>
      {props.person.Firstname} {props.person.Surname}
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.exact({
    Firstname: PropTypes.string,
    Surname: PropTypes.string,
    Display: PropTypes.string,
    Lat: PropTypes.number,
    Long: PropTypes.number,
  }).isRequired,
}

export default Person
