import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container1 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal"
          >
            <div className="features2-divider-container">
              {activeTab === 0 && <div className="features2-container2"></div>}
            </div>
            <div className="features2-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 1 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 2 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2Description:
    'Discover our comprehensive swimming pool services such as design & construction, installations & maintenance, pool equipment supply, steam & sauna facilities construction, landscaping & plumbing, pool automation, and repair & maintenance.',
  feature1Title: 'Water Treatment Solutions',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Explore our range of water treatment solutions including domestic water filters, commercial & industrial water filters, water softeners, reverse osmosis systems, whole house filter systems, and wastewater treatment systems.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1508716880829-dd496b382c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Swimming Pool Services',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1521811628991-7a3ea581f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Learn more about the spares and services we offer to ensure the optimal functioning of your water treatment systems.',
  feature2ImgAlt: 'Swimming Pool Services Image',
  feature3Title: 'Spares & Services',
  feature1ImgAlt: 'Water Treatment Solutions Image',
  feature3ImgAlt: 'Spares & Services Image',
}

Features2.propTypes = {
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features2
