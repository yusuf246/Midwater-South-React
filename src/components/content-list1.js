import React from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <fragment>
                    <span className="content-list1-text11 thq-heading-2">
                      Water Treatment Solutions
                    </span>
                  </fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <fragment>
                    <span className="content-list1-text05 thq-body-small">
                      Explore our wide range of water treatment solutions
                      including filters, softeners, and more to ensure clean and
                      safe water for your home or business.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <fragment>
                    <span className="content-list1-text10 thq-heading-3">
                      Swimming Pool Services
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <fragment>
                    <span className="content-list1-text02 thq-body-small">
                      Discover our comprehensive swimming pool services offering
                      design, construction, maintenance, and automation systems
                      to keep your pool in top condition.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <fragment>
                    <span className="content-list1-text09 thq-heading-3">
                      Products
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <fragment>
                    <span className="content-list1-text03 thq-body-small">
                      Find high-quality products such as water filters,
                      softeners, pool automation systems, and spare parts to
                      meet your specific needs.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <fragment>
                    <span className="content-list1-text01 thq-heading-3">
                      Services
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <fragment>
                    <span className="content-list1-text07 thq-body-small">
                      Benefit from our expert services including personalized
                      consultations, installations, ongoing maintenance, and
                      support for your water treatment and pool systems.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading5 ?? (
                  <fragment>
                    <span className="content-list1-text08 thq-heading-3">
                      Customer Testimonials
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content5 ?? (
                  <fragment>
                    <span className="content-list1-text thq-body-small">
                      Read what our satisfied customers have to say about our
                      products and services to gain insight into their positive
                      experiences.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading6 ?? (
                  <fragment>
                    <span className="content-list1-text06 thq-heading-3">
                      Contact Us
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.content6 ?? (
                  <fragment>
                    <span className="content-list1-text04 thq-body-small">
                      Get in touch with us via email or phone for any inquiries
                      or assistance regarding our water treatment solutions,
                      swimming pool services, or products.
                    </span>
                  </fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content5: undefined,
  heading4: undefined,
  content2: undefined,
  content3: undefined,
  content6: undefined,
  content1: undefined,
  heading6: undefined,
  content4: undefined,
  heading5: undefined,
  heading3: undefined,
  heading2: undefined,
  heading1: undefined,
}

ContentList1.propTypes = {
  content5: PropTypes.element,
  heading4: PropTypes.element,
  content2: PropTypes.element,
  content3: PropTypes.element,
  content6: PropTypes.element,
  content1: PropTypes.element,
  heading6: PropTypes.element,
  content4: PropTypes.element,
  heading5: PropTypes.element,
  heading3: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
}

export default ContentList1
