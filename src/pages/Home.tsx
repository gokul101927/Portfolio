import './Home.css';

const Home = () => {

  return (
    <div className='flex sticky top-0 flex-col justify-center items-center h-screen'>
      <div>
        <div className="letter">
          <p>
            <span data-text="G" className='animate-[jumpFromTop_0.5s_forwards]'>G</span>
            <span data-text="O" className='animate-[jumpFromTop_0.7s_forwards]'>O</span>
            <span data-text="K" className='animate-[jumpFromTop_1s_forwards]'>K</span>
            <span data-text="U" className='animate-[jumpFromTop_1.2s_forwards]'>U</span>
            <span data-text="L" className='animate-[jumpFromTop_1.5s_forwards]'>L</span>
          </p>
        </div>
      </div>
      <div>
        <p className='text-white text-md md:text-2xl animate-[jumpFromTop_2s_forwards]'>An aspiring Full Stack Developer</p>
      </div>
    </div>
  )
}

export default Home