import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container1 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              <span>
                Ready to enhance your water quality or perfect your pool
                experience? Contact Midwater South or Networld Pools today! Call
                us at the numbers below and follow the easy steps on your screen
                to get started.
              </span>
              <br></br>
              <br></br>
              <span>Water Treatment Business  :-</span>
              <br></br>
              <br className="steps-text07"></br>
              <span className="steps-text08">Midwater South</span>
              <br className="steps-text09"></br>
              <span className="steps-text10">(Sindh, Pakistan)</span>
              <br className="steps-text11"></br>
              <br className="steps-text12"></br>
              <span className="steps-text13">
                Address : 8-C, Ittehad Commercial Lane # 09, Ittehad Commercial
                Area, DHA Phase VI, Karachi, Pakistan
              </span>
              <br className="steps-text14"></br>
              <br className="steps-text15"></br>
              <span className="steps-text16">Phone Number : </span>
              <br className="steps-text17"></br>
              <span className="steps-text18">+92 0340 1325000</span>
              <br className="steps-text19"></br>
              <br className="steps-text20"></br>
              <span className="steps-text21">Email :</span>
              <br className="steps-text22"></br>
              <span className="steps-text23">info@midwatersouth.com</span>
              <br></br>
              <br></br>
              <span>Swimming Pool Business :-</span>
              <br></br>
              <br></br>
              <span className="steps-text29">
                Networld
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>(Pakistan)</span>
              <br></br>
              <br></br>
              <span>
                Address : 8-C, Ittehad Commercial Lane # 09, Ittehad Commercial
                Area, DHA Phase VI, Karachi, Pakistan
              </span>
              <br></br>
              <br></br>
              <span>Phone Number :</span>
              <br></br>
              <span>+92 0321 2111888</span>
              <br></br>
              <br></br>
              <span>Email :</span>
              <br></br>
              <span>info@networldholding.com</span>
              <br></br>
              <br></br>
              <span className="steps-text47">Midwater Head Office</span>
              <br></br>
              <br></br>
              <span>Islamabad Branch (HO)</span>
              <br></br>
              <span>Address : 387 Street-11, I-8/2, Islamabad, Pakistan</span>
              <br></br>
              <br></br>
              <span>Phone Number :</span>
              <br></br>
              <span>+92 0331 0006000</span>
              <br></br>
              <br></br>
              <br></br>
            </p>
            <div className="steps-actions"></div>
          </div>
          <div className="steps-container2">
            <div className="steps-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text62 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text63 thq-heading-3">01</label>
            </div>
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text65 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text66 thq-heading-3">02</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text68 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text69 thq-heading-3">03</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text71 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text72 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step1Description:
    'Schedule a meeting with our team to discuss your water treatment or swimming pool service needs.',
  step2Description:
    'Receive personalized recommendations and solutions tailored to your specific requirements and budget.',
  step3Title: 'Professional Installation',
  step1Title: 'Initial Consultation',
  step4Title: 'Ongoing Support',
  step2Title: 'Customized Solutions',
  step4Description:
    'We provide continuous support and maintenance services to ensure the optimal performance of your water treatment systems or swimming pools.',
  step3Description:
    'Our expert technicians will handle the installation process efficiently and ensure everything is set up correctly.',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step2Description: PropTypes.string,
  step3Title: PropTypes.string,
  step1Title: PropTypes.string,
  step4Title: PropTypes.string,
  step2Title: PropTypes.string,
  step4Description: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps
