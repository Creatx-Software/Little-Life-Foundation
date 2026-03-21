import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='footer__intro'>
                <div className='row align-items-center justify-content-center gutter-30'>
                  <div className='col-12 col-sm-8 col-lg-5 col-xl-6'>
                    <div className='footer__content'>
                      <h3 className='title-animation_inner'>
                        Ready to Make a Difference?
                        <br />
                        Start <span>donating</span>{" "}
                        today
                      </h3>
                    </div>
                  </div>
                  <div className='col-12 col-lg-7 col-xl-6'>
                    <div
                      className='footer__support'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      <Link href='/contact-us'>
                        for Any Inquiry <span style={{ fontSize: '0.85em' }}>info@littlelifefoundation.org</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row gutter-60'>
            <div className='col-12 col-xl-6'>
              <div
                className='footer__newsletter'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='footer__newsletter-info'>
                  <h4 className='title-animation_inner'>
                    Subscribe Newsletter
                  </h4>
                  <p>We understand that every challenge is an opportunity </p>
                </div>
                <div className='footer__newsletter-form'>
                  <form action='#' method='post'>
                    <div className='input-icon'>
                      <input
                        type='email'
                        required=''
                        name='subscribe-email'
                        id='subscribeEmail'
                        placeholder='Enter Email'
                      />
                      <i className='fa-regular fa-envelope' />
                    </div>
                    <button
                      type='submit'
                      aria-label='subscribe to our newsletter'
                      title='subscribe to our newsletter'
                      className='btn--primary'
                    >
                      Subscribe <i className='fa-solid fa-paper-plane' />
                    </button>
                  </form>
                </div>
                <div className='footer__newsletter-check'>
                  <div className='form-group'>
                    <input type='checkbox' id='acceptPolicy' />
                    <label htmlFor='acceptPolicy'>
                      By subscribing, you're accepting our{" "}
                      <Link href='/contact-us'>Privacy Policy</Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-2 offset-xl-1'>
              <div
                className='footer__list'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <div className='footer__list-intro'>
                  <h5 className='title-animation_inner'>Services</h5>
                </div>
                <div className='footer__list-items'>
                  <ul>
                    <li>
                      <Link href='/about-us'>
                        <i className='fa-solid fa-angles-right' />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-angles-right' />
                        Our Programs
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-team'>
                        <i className='fa-solid fa-angles-right' />
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog-list'>
                        <i className='fa-solid fa-angles-right' />
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link href='/faq'>
                        <i className='fa-solid fa-angles-right' />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer__list'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='footer__list-group'>
                  <div className='footer__list-intro'>
                    <h5 className='title-animation_inner'>Locations</h5>
                  </div>
                  <div className='content'>
                    <p>
                      <a
                        href='https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8'
                        target='_blank'
                        rel='noreferrer'
                      >
                        123 Charity Lane, Colombo 07, Sri Lanka
                      </a>
                    </p>
                  </div>
                </div>
                <div className='footer__list-group'>
                  <div className='footer__list-intro'>
                    <h5 className='title-animation_inner'>Contact</h5>
                  </div>
                  <div className='content'>
                    <p>
                      <a href='mailto:support@example.com'>
                        info@littlelifefoundation.org
                      </a>
                    </p>
                    <p>
                      <a href='tel:2305-587-3407'>+94 70 533 2446</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer__copyright'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='footer__copyright-inner'>
                    <div className='row align-items-center gutter-24'>
                      <div className='col-12 col-xl-3'>
                        <div className='footer__copyright-logo text-center text-xl-start'>
                          <Link href='/'>
                            <img
                              src='assets/images/Little life - LOGO Final.png'
                              alt='Image_inner'
                              style={{ width: '80px', height: 'auto' }}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className='col-12 col-xl-6'>
                        <div className='footer__bottom-right text-center'>
                          <p>
                            Copyright © <span id='copyrightYear' />{" "}
                            <Link href='/' target='_blank'>
                              LittleLife
                            </Link>
                            . All rights reserved.
                          </p>
                        </div>
                      </div>
                      <div className='col-12 col-xl-3'>
                        <div className='footer__bottom-left'>
                          <ul className='footer__bottom-list justify-content-center justify-content-xl-end'>
                            <li>
                              <Link href='/terms-conditions'>
                                Terms &amp; Conditions
                              </Link>
                            </li>
                            <li>
                              <Link href='/privacy-policy'>Privacy Policy</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
