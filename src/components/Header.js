import React from 'react'
import '../assets/style/Header.css'
import header_img from '../assets/img/header_img.png'
import Work from './Work'
import Stake from './Stake'
import Invest from './Invest'
import Accordian from './Accordian'
import Footer from './Footer'



const Header = () => {
  return (
    <>
      <section>
        <div className='container header_main_div' >
          <div className='row'>
            <div className='col-md-6 header_main_heading'>
              <h3 className='header_heading'><span style={{ color: '#1092B2' }}>Qube</span> partners with high-potential blockchain projects.</h3>
              <p className='header_p'>Professional investors, blockchain strategists and social-media influencers, investing in a decentralized future.</p>
              <button class="btn btn-success header_btn" type="submit">Learn More</button>
            </div>
            <div className='col-md-6 header_img'>
              <img className='' src={header_img} width="100%" />
            </div>
          </div>

        </div>
        <Work />
        <Stake />
        <Invest />
        <Accordian />
        <Footer />
      </section>
    </>
  )
}

export default Header