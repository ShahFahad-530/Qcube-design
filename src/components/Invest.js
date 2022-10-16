import React from 'react'
import '../assets/style/Invest.css'
import hands from '../assets/img/hands.png'
import invest_img from '../assets/img/invest_img.png'



const Invest = () => {
  return (
    <section className='section_invest_main' >
      <div className='container work_bg'>
        <img className='invest_img' src={invest_img} />
        <div className='row gx-5'>
          <div className='col-12 text-center pb-5'>
            <h3 className='work_heading'>Invest with us</h3>
            <p className='work_p1'>Here are some reasons why you will make the best decision by choosing us.</p>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='work_rec'>
              <img src={hands} />
              <h5 className='rec_heading_two'>Strategic partnership</h5>
              <p className='work_p'>Qube partners with promising blockchain projects, assisting them towards successful ICOs, through funding, advisory services and community awareness generation.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='work_rec'>
              <img src={hands} />
              <h5 className='rec_heading_one'>Strategic partnership</h5>
              <p className='work_p'>Qube partners with promising blockchain projects, assisting them towards successful ICOs, through funding, advisory services and community awareness generation.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='work_rec'>
              <img src={hands} />
              <h5 className='rec_heading_two'>Strategic partnership</h5>
              <p className='work_p'>Qube partners with promising blockchain projects, assisting them towards successful ICOs, through funding, advisory services and community awareness generation.</p>
            </div>
          </div>
          <div className='text-center invest_btn_div'>
            <button class="btn btn-success invest_btn" type="submit">View more</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Invest