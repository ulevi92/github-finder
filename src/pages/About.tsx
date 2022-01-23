const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>

      <p className='text-1xl'>
        Visit my
        <a
          href='https://github.com/ulevi92'
          target='_blank'
          rel='noreferrer'
          className='hover:text-sky-500'
        >
          {` Github`}
        </a>
      </p>
    </>
  );
};

export default About;
