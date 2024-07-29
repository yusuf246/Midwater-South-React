import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
          <p className="hero-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <a
            href="https://midwatersouth.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-button thq-button-filled"
          >
            <span className="thq-body-small">{props.action1}</span>
          </a>
          <a
            href="https://networldholding.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-button1 thq-button-outline"
          >
            <span className="thq-body-small">{props.action2}</span>
          </a>
        </div>
      </div>
      <div className="hero-content1">
        <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image01 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image02 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image03 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image04 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image05 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image06 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image07 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image08 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image09 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image11Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1516617206694-919efe54e80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  image7Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1523436278115-b135a7a26ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1524312966005-030e396636fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1556139902-7367723b7e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image8Src:
    'https://images.unsplash.com/photo-1495218128687-72d990041786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1560780552-ba54683cb263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1517008729672-a63ddcf53acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1589307004173-3c95204d00ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1500740516770-92bd004b996e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Medium length hero headline goes here',
  image11Src:
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Secondary action',
  image9Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1498354136128-58f790194fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Hero Image',
  action1: 'Main action',
}

Hero.propTypes = {
  image11Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image12Src: PropTypes.string,
  content1: PropTypes.string,
  image7Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image7Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image9Src: PropTypes.string,
  heading1: PropTypes.string,
  image11Src: PropTypes.string,
  action2: PropTypes.string,
  image9Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image4Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero
