const ContactUsInner = () => {
  return (
    <section className='contact-main volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' /> Get In Touch
                </span>
                <h2 className='title-animation_inner'>Let's Start a Conversation</h2>
                <p>
                  Have questions or want to get involved? We'd love to hear from you. Reach out and let's make a difference together.
                </p>
              </div>
              <div className='contact-main__inner cta'>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>Location</h6>
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
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href='tel:+94705332446'>+94 70 533 2446 </a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href='mailto:info@littlelifefoundation.org'>info@littlelifefoundation.org</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-clock' />
                  </div>
                  <div className='content'>
                    <h6>Working Hours</h6>
                    <p>
                      <a href='mailto:info@littlelifefoundation.org'>Monday - Friday: 9:00 AM - 5:00 PM</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='contact-main__thumb cta'>
                <img src='assets/images/contact-thumb.png' alt='Image_inner' />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action='#' method='post' className='cta'>
                <div className='input-single'>
                  <input
                    type='text'
                    name='full-name'
                    id='fullName'
                    placeholder='Enter Name'
                    required=''
                  />
                  <i className='fa-solid fa-user' />
                </div>
                <div className='input-single'>
                  <input
                    type='email'
                    name='c-email'
                    id='cEmail'
                    placeholder='Enter Email'
                    required=''
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='phone-number'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    required=''
                  />
                  <i className='fa-solid fa-phone' />
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Your Message...'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-comments' />
                </div>
                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='submit message'
                    title='submit message'
                    className='btn--primary'
                  >
                    Send Message <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInner;
