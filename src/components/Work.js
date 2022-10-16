import React from 'react'
import '../assets/style/Work.css'
import hands from '../assets/img/hands.png'
import work_img from '../assets/img/Work_img.png'



const Work = () => {
  return (
    <section className='section_work_main'>
      <div className='container work_bg'>
        <img className='work_img' src={work_img} />
        <div className='row gx-5'>
          <div className='col-12 text-center pb-5'>
            <h3 className='work_heading'>Work with us</h3>
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

        </div>

      </div>
    </section>
  )
}

export default Work