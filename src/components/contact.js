import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div id={props.contactId} className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact-text02 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info">
              <div className="contact-content2">
                <h3 className="contact-text03 thq-heading-3">Email</h3>
                <p className="contact-text04 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span>
                {props.email ?? (
                  <fragment>
                    <span className="contact-email1 thq-body-small">
                      <span>info@midwatersouth.com</span>
                      <br></br>
                      <span>info@networldhodling.com</span>
                      <br></br>
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content4">
                <h3 className="contact-text05 thq-heading-3">Phone</h3>
                <p className="contact-text06 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span>
                {props.phone ?? (
                  <fragment>
                    <span className="contact-phone1 thq-body-small">
                      <span>Midwater South :- +92 0340 1325000</span>
                      <br></br>
                      <span>Networld Pools :- +92 0321 2111888</span>
                      <br></br>
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content6">
                <h3 className="contact-text07 thq-heading-3">Office</h3>
                <p className="contact-text08 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <span className="contact-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  address1:
    '8-C, Ittehad Commercial Lane # 09, Ittehad Commercial Area, DHA Phase VI, Karachi, Pakistan',
  heading1: 'Contact Us',
  content3:
    'We value your feedback and strive to provide excellent customer service.',
  content1:
    'Feel free to reach out to us for any inquiries or questions. We are here to help!',
  content4: 'Our business hours are Monday to Saturday, 9:00 AM - 6:00 PM.',
  content2:
    'For specific inquiries regarding Midwater Products or Networld services, please use the contact forms on their respective pages.',
  email: undefined,
  content5:
    'Visit us during our business hours or contact us via phone or email.',
  contactId: '',
  phone: undefined,
}

Contact.propTypes = {
  address1: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  content2: PropTypes.string,
  email: PropTypes.element,
  content5: PropTypes.string,
  contactId: PropTypes.string,
  phone: PropTypes.element,
}

export default Contact
