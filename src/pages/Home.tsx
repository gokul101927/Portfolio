


const Home = () => {

  // background wave
  // bg-[url('../src/assets/wave.svg')] bg-no-repeat bg-center

  return (
    <div className="snap-mandatory snap-start snap-y snap-always snap-center overflow-y-scroll bg-primary flex flex-col h-screen">
        <div className="snap-start flex flex-col w-full h-full container mx-auto justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="animate-jumpFromTop animate-shine bg-clip-text	bg-[length:200px] bg-white inline text-white text-4xl md:text-5xl drop-shadow-lg">Hi there, I am <strong>Gokul</strong>.</h1>
            <h4 className="animate-[jumpFromTop_1.5s_forwards] inline text-white text-xl">An aspiring Full Stack Developer.</h4>
          </div>
        </div>
        <div className="animate-[jumpFromTop_2s_forwards]">
        <div className="snap-start animate-jumpInfinite w-20 h-20 flex flex-col py-12 mb-12 container mx-auto justify-center items-center opacity-50 cursor-pointer">
          <a href="#about">
            <img
              src="../src/assets/down-arrow.png"
              alt="down arrow"
              className="h-8 object-contain"
            />
          </a>
        </div>
        </div>
        
    </div>
  )
}

export default Home