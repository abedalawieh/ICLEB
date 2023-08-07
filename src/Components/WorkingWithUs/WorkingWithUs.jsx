import React from 'react'
import './styles.css';
import poule from '../../Assets/pouledor.png';
import roman from '../../Assets/romanfood.png';
import stc from '../../Assets/stc.jpg';
import falcon from '../../Assets/falcon.jpg';
import lamaica from '../../Assets/lamaica.jpg';
import afif from '../../Assets/afif.jpeg';
import zsco from '../../Assets/zsco.jpg';
import cross from '../../Assets/cross.png';
import iraqiairways from '../../Assets/iraqiairways.png';
import cidi from '../../Assets/cidi.png';
import easy from '../../Assets/easy.jpeg';
import zaeem from '../../Assets/zaeem.jpg';





const WorkingWithUs = () => {
  return (
     <section class="work section" id="work">
    <h2 class="section-title">Working with us</h2>
    <h5 class="section-phrase">In Lebanon</h5>


    <div class="work__container bd-grid">
        <a href="" class="work__img">
            <img src={poule} alt=""></img>
        </a>
        <a href="" class="work__img">
            <img src={roman} alt=""></img>
        </a>
        <a href="" class="work__img">
            <img src={stc} alt=""></img>
        </a>
        <a href="" class="work__img">
            <img src={falcon} alt=""></img>
        </a>
        <a href="" class="work__img">
            <img src={afif} alt=""></img>
        </a>
        <a href="" class="work__img">
            <img src={lamaica} alt=""></img>
        </a>
      
    </div>
    <h3 class="section-phrase">In IRAQ</h3>


<div class="work__container bd-grid">
    <a href="" class="work__img">
        <img src={zsco} alt=""></img>
    </a>
    <a href="" class="work__img">
        <img src={cross} alt=""></img>
    </a>
    <a href="" class="work__img">
        <img src={iraqiairways} alt=""></img>
    </a>

  
</div>
<h3 class="section-phrase">In Africa,China & Indonesia</h3>


<div class="work__container bd-grid">
    <a href="" class="work__img">
        <img src={cidi} alt=""></img>
    </a>
    <a href="" class="work__img">
        <img src={easy} alt=""></img>
    </a>
    <a href="" class="work__img">
        <img src={zaeem} alt=""></img>
    </a>

  
</div>
</section>
  )
}

export default WorkingWithUs