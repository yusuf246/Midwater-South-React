import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                  </div>
                </div>
                <span className="testimonial-text03 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                  </div>
                </div>
                <span className="testimonial-text05 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                  </div>
                </div>
                <span className="testimonial-text09 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Name: 'Ali Raza',
  author2Alt: 'Image of Emily Johnson',
  review1:
    'Midwater South exceeded our expectations with their top-notch service. We highly recommend them for all water treatment needs.',
  review2:
    "Networld's swimming pool services are exceptional. From design to maintenance, they handled everything professionally and efficiently. Highly recommended!",
  review3:
    'Choosing Midwater South was the best decision for our water treatment requirements. Their professionalism and dedication are unmatched.',
  content1:
    'Read what our customers have to say about their experience with Midwater South.',
  author3Src:
    'https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Customer Testimonials',
  author3Name: 'Mehtab Haider\n',
  author2Src:
    'https://images.unsplash.com/photo-1635930870702-aab3e1b19cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1518611540400-6b85a0704342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    "Networld's pool automation system has made managing our pool a breeze. Their team was knowledgeable and provided excellent customer service throughout the process.",
  author4Alt: 'Image of Sarah Davis',
  author1Alt: 'Image of John Smith',
  author3Alt: 'Image of Michael Brown',
  author2Name: 'Zafar Rahin',
  author1Src:
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzA0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'Imran Mehsud\n',
}

Testimonial.propTypes = {
  author4Name: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.string,
  review2: PropTypes.string,
  review3: PropTypes.string,
  content1: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  review4: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author1Src: PropTypes.string,
  author1Name: PropTypes.string,
}

export default Testimonial
