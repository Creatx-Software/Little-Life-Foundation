const FaqOne = () => {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Start donating poor people
                </span>
                <h2 className='title-animation_inner'>
                  Frequently <span>Asked</span>
                  Questions
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion' id='accordion'>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        How do you identify the communities in Sri Lanka that need the most help?
                      </button>
                    </h6>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          We work closely with local leaders and grassroots volunteers across 15+ districts to identify families and students facing the greatest challenges. This on-the-ground approach ensures our resources—from clean water to education—reach those truly in need.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        How much of my donation goes directly to your community programs?
                      </button>
                    </h6>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          We are committed to maximum impact and transparency. By working with a dedicated volunteer network and localized operations, we ensure the vast majority of every donation is funneled directly into our field projects and life-changing initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Can I choose to sponsor a specific project, like a water well or a scholarship?
                      </button>
                    </h6>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Yes, we offer the option to "Sponsor a Project." You can choose to fund a specific water purification system, an annual student scholarship, or a meal program. We provide direct updates so you can see the specific impact of your contribution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        Besides donating, how can I get involved in your mission?
                      </button>
                    </h6>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Compassionate action takes many forms. You can join our network of volunteers to help distribute supplies, offer your expertise as a guest tutor, or help us raise awareness by sharing our stories of hope within your own community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='assets/images/faq/thumb-lg.png' alt='Image_inner' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='assets/images/faq/thumb-sm.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default FaqOne;
