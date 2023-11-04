const Footer = () => {
  return (
    <footer className='d-flex flex-column bg-dark text-center text-white'>
      <div className='container p-2'>
        <section className='mb-2'>
          <p>This is a small coffee shop web app for interview</p>
        </section>
        <section>
          <div className='row'>
            <div className=' mb-md-0'>
              <ul className='d-flex flex-row gap-4 list-unstyled mb-0'>
                <li>
                  <a
                    href='https://linkedin.com/in/dejan-ivkovski'
                    className='text-white'
                    target='_blank'
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/DekoIvko'
                    className='text-white'
                    target='_blank'
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className='text-center p-2'>© 2023 Copyright</div>
    </footer>
  );
};

export default Footer;
