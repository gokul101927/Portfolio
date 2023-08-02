

const Home = () => {

  return (
    <div className="snap-proximity snap-y snap-always snap-center  bg-[url('../src/assets/hero-bg.jpg')] flex flex-col h-screen max-h-screen ">
      <div className="flex flex-col w-full h-full container mx-auto justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="animate-jumpFromTop inline text-white text-4xl drop-shadow-lg">Hi, I am <strong>Gokul</strong>.</h1>
          <h4 className="animate-[jumpFromTop_1.5s_forwards] inline text-white text-xl">An aspiring full stack developer.</h4>
        </div>
      </div>
      <div className="animate-jumpInfinite w-20 h-20 flex flex-col py-12 mb-12 container mx-auto justify-center items-center opacity-50 cursor-pointer">
          <a href="#about">
          <img
            src="../src/assets/down-arrow.png"
            alt="down arrow"
            className="h-8 object-contain"
          />
          </a>
      </div>
    </div>
  )
}

export default Home