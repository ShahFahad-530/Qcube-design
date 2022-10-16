import React from 'react'
import '../assets/style/Footer.css'
import Form from 'react-bootstrap/Form';
import logo_img from '../assets/img/logo.png'


const Footer = () => {
  return (
    <>
      <div className='container footer_div'>
        <div className='Footer_div_main'>
          <div className="first_footer_main">
            <div className='row'>
              <div className='col-md-6'>
                <h3 style={{ color: '#1092B2' }}>Got something for us? <br />
                  Get in touch . . .</h3>
                <p>Our products will transform your business. Feel free to use the form, or contact us directly via hello@qubevc.com
                </p>
              </div>
              <div className='col-md-6'>

                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control style={{ border: 'none' }} type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control style={{ border: 'none' }} type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control placeholder='Message' style={{ border: 'none' }} as="textarea" rows={3} />
                  </Form.Group>
                </Form>
                <div className="subscribe_btn_div">

                  <button className="btn btn-success btn_search_form" type="submit">Send</button>
                </div>

              </div>

            </div>
          </div>

          {/* second row */}
          <div className="second_row_footer_main">
            <div className='row'>
              <div className='col-md-3 col-sm-6'>
                <img src={logo_img} />
                <p>Professional investors, blockchain strategists and social-media influencers, investing in a decentralized future.
                </p>
              </div>
              <div className='col-md-3 col-sm-6'>
                <h5>Navigation</h5>
                <ul>
                  <a className='footer_li'><li>Home</li></a>
                  <a className='footer_li'><li>Staking</li></a>
                  <a className='footer_li'><li>Portfolio</li></a>
                  <a className='footer_li'><li>Features</li></a>
                  <a className='footer_li'><li>FAQS</li></a>
                </ul>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className="last_form_footer">
                  <h6>Contacts</h6>
                  <p className='botom_para'>One Ferry Building, Suite 255</p>
                  <p className='botom_para'>San Francisco, CA 94111</p>
                  <p className='footer-cntct'>+1 (415) 677-5340</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className="last_form_footer">
                  <h5>Subscribe to our newsletter</h5>
                  <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control style={{ border: 'none', borderRadius: 0 }} className='email_footer_last' type="email" placeholder="hello@quellxcode.com" />
                    </Form.Group>

                  </Form>
                  <button class="btn btn-success subscribe_btn_footer" type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p style={{ marginTop: '34px' }}>Website designed by © 2020—2021, QuellxCode</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer