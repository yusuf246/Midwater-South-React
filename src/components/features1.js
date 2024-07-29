import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container1 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal"
          >
            <div className="features1-divider-container">
              {activeTab === 0 && <div className="features1-container2"></div>}
            </div>
            <div className="features1-content"></div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 1 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1"></div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 2 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImgAlt: 'Completed Projects Gallery',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1537204319452-fdbd29e2ccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0N3w&ixlib=rb-4.0.3&q=80&w=200',
  feature3ImgAlt: 'Swimming Pool Chemicals',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0NHw&ixlib=rb-4.0.3&q=80&w=200',
}

Features1.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Features1
