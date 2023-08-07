import React, {useEffect} from 'react'

//importing react-router
import {Link} from 'react-router-dom';

//importing styles
import './footer.css'

//importing components

//importing assets

//importing used icons
import {TbTransitionTop} from 'react-icons/tb'

//importing the aos library
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  //creating a scroll animation
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
      <section className="footer">
     

        <div className="secContent container">
          <div className="contactDiv flex">

            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Contact Us</h2>
            </div>

           
            
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <TbTransitionTop className="icon"/>
ICLEB                </a>
              </div>

              <div data-aos="fade-up" data-aos-duration="3000" className="footerParagraph">
              Our company offers Accounting 
solutions for small, medium and large
sized companies. These solutions 
involve readymade software such as: 
Al-Ameen Accounting System – which 
integrates with a number of other 
readymade solutions – along with 
special programs customized for our 
customers. These programs cover the 
various activities of business, 
industrial, commercial and service 
activities
              </div>


            </div>



         

          </div>
        </div>
      </section>
      
    </>
  )
}

export default Footer