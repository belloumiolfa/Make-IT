const Main = () => {
   return (
      <main id='main'>
         <section id='about' className='about'>
            <div className='container'>
               <div className='row content'>
                  <div className='col-lg-6'>
                     <h2>Make' it different </h2>
                     <h3>Make only different, creative and unique things.</h3>
                  </div>
                  <div className='col-lg-6 pt-4 pt-lg-0'>
                     <p className='text-justify'>
                        A full-stack UI / UX design, branding and development
                        agency. As a full-stack and versatile digital design
                        agency, we are the ones who invented the design thinking
                        approach, which we practice to do everything from UI /
                        UX to web applications and brand identities to clearly
                        modern and interactive marketing websites.
                     </p>
                     <ul>
                        <li>
                           <i className='icofont-check'></i>{' '}
                           <p className='text-justify'>
                              We combine the best parts of the business
                              consulting, a creative eye, and the engineering to
                              deliver outstanding work.
                           </p>
                        </li>
                        <li>
                           <i className='icofont-check'></i>{' '}
                           <p className='text-justify'>
                              We are one of the few UI / UX designers and brand
                              developers who can take a project from an initial
                              idea to a finished product and beyond.
                           </p>
                        </li>
                     </ul>
                     <p className='font-italic text-justify'>
                        A complete design agency. We offer a wide range of
                        professional bespoke design solutions, from branding
                        design and illustration to website and app.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         {/* End About Us Section */}
      </main>
   );
};

export default Main;
