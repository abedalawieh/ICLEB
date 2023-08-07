import React, {useEffect} from 'react'

//importing styles
import './about.css'

//importing assets
import aboutus from '../../Assets/about.JPG'

//importing the aos library
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {

  //creating a scroll animation
  useEffect(() => {
    Aos.init({duration: 3000})
  }, [])

  return (
    <section id='about'>
    <div className="about container">
      <div className="contentDiv flex">

        <div className="aboutUsDiv">
          <div className="aboutUs-text">
            <h2 data-aos="fade-up">ABOUT US</h2>
            <p data-aos="fade-up">InfoCenter For Computer Services is a 
pioneer in the industry of Arabic 
Accounting software. The early start of 
InfoCenter For Computer Services 
goes back to 1994. At that time it was 
the first Arabic company launching 
multi-users accounting software 
operating on Windows System. And 
it's still working to keep its pioneering 
among other Arabic programming 
companies through constant 
expansion and development of its 
programming technology. Thereby, it 
keeps-up-with state of the art of 
development of management and 
computer technologies. 
Prompted by the interest in providing 
outstanding technical support, 
InfoCenter For Computer Services 
contracted with clients in Arabic Gulf 
and in most Arabic countries. This, in 
addition to providing exclusive website 
for online customers support. 
            </p>
          </div>
          <div className="aboutUs-images">
            <img data-aos="fade-right" src={aboutus} alt=""/>
          </div>
        </div>

    

      
      </div>
    </div>
  
</section>

  )
}

export default About