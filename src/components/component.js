import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <span>
        {props.text ?? (
          <fragment>
            <span className="app-component-text1">Text</span>
          </fragment>
        )}
      </span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: undefined,
}

AppComponent.propTypes = {
  text: PropTypes.element,
}

export default AppComponent
