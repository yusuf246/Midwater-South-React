import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ContentList1 from '../components/content-list1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Midwater South</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero
        action1="Midwater South"
        action2="Networld Pools"
        content1="Purifying Water, Perfecting Pools"
        heading1="Midwater South"
        image1Src="https://images.unsplash.com/photo-1485874132365-6412a19f94ba?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzgyMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image2Src="https://images.unsplash.com/photo-1444944232907-0b9e9ace348c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5Mzc4NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image3Src="https://images.unsplash.com/photo-1516430793250-5e1592350e44?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5MzgzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image7Src="https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5Mzg1MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image8Src="https://images.unsplash.com/photo-1475082211816-b48baf3f69e3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5Mzg3Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image9Src="https://images.unsplash.com/photo-1509849809433-36d5c609f0ee?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTg5Mzg5MHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero>
      <h1>What We Offfer</h1>
      <ContentList1
        content1={
          <fragment>
            <span className="home-text01 thq-body-small">
              Explore our wide range of water treatment solutions including
              filters, softeners, and more to ensure clean and safe water for
              your home or business.
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="home-text02 thq-body-small">
              Discover our comprehensive swimming pool services offering design,
              construction, maintenance, and automation systems to keep your
              pool in top condition.
            </span>
          </fragment>
        }
        content3={
          <fragment>
            <span className="home-text03 thq-body-small">
              Find high-quality products such as water filters, softeners, pool
              automation systems, and more to meet your specific needs.
            </span>
          </fragment>
        }
        content4={
          <fragment>
            <span className="home-text04 thq-body-small">
              Benefit from our expert services including personalized
              consultations, installations, ongoing maintenance, and support for
              your water treatment and pool systems.
            </span>
          </fragment>
        }
        content5={
          <fragment>
            <span className="home-text05 thq-body-small">
              Read what our satisfied customers have to say about our products
              and services to gain insight into their positive experiences.
            </span>
          </fragment>
        }
        content6={
          <fragment>
            <span className="home-text06 thq-body-small">
              Get in touch with us via email or phone for any inquiries or
              assistance regarding our water treatment solutions, swimming pool
              services, or products.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text07 thq-heading-2">
              Water Treatment Solutions
            </span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="home-text08 thq-heading-3">
              Swimming Pool Services
            </span>
          </fragment>
        }
        heading3={
          <fragment>
            <span className="home-text09 thq-heading-3">Products</span>
          </fragment>
        }
        heading4={
          <fragment>
            <span className="home-text10 thq-heading-3">Services</span>
          </fragment>
        }
        heading5={
          <fragment>
            <span className="home-text11 thq-heading-3">
              Customer Testimonials
            </span>
          </fragment>
        }
        heading6={
          <fragment>
            <span className="home-text12 thq-heading-3">Contact Us</span>
          </fragment>
        }
      ></ContentList1>
      <a href="#Contact" className="home-link">
        <CTA action1="Get in Touch" className="home-cta-instance"></CTA>
      </a>
      <Features2
        feature3Title=" Services"
        feature3Description="Learn more about the services we offer to ensure the optimal functioning of your water treatment systems."
      ></Features2>
      <div className="home-container1"></div>
      <Steps></Steps>
      <Testimonial review1="Midwater South exceeded our expectations with their top-notch service. We highly recommend them for all water treatment needs."></Testimonial>
      <Contact
        email={
          <fragment>
            <span className="home-email thq-body-small">
              <span>info@midwatersouth.com</span>
              <br></br>
              <span>info@networldhodling.com</span>
              <br></br>
            </span>
          </fragment>
        }
        phone={
          <fragment>
            <span className="home-phone thq-body-small">
              <span>Midwater South :- +92 0340 1325000</span>
              <br></br>
              <span>Networld Pools :- +92 0321 2111888</span>
              <br></br>
            </span>
          </fragment>
        }
        address1="8-C, Ittehad Commercial Lane # 09, Ittehad Commercial Area, DHA Phase VI, Karachi, Pakistan"
        content4="Our business hours are Monday to Saturday, 9:00 AM - 6:00 PM."
        contactId="Contact"
      ></Contact>
      <Footer content3="© 2024 Midwater South. All Rights Reserved."></Footer>
    </div>
  )
}

export default Home
