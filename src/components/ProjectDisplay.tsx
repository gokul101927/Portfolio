const ProjectDisplay = () => {
  return (
    <div className="container relative">
      <div className="opacity-50 object-cover relative w-full animate-[fadeIn_1s_ease-in]">
        <img
          src="../src/assets/comentario.jpg"
          alt="logo"
          className="h-96 object-contain"
        />
      </div>
      <div className="absolute top-8 left-1/4 w-[44rem] flex flex-col animate-[fadeIn_2s_ease-in]">
        <div className="relative left-4 w-full">
          <h1 className="inline-flex p-3 bg-primaryRed text-white text-lg font-bold">Comentario</h1>
        </div>
        <div className="z-10 flex flex-col gap-2 p-4 py-8 flex flex-col text-lg gap-4 shadow bg-black">
          <p>
            Featured on Product Hunt, Tailwindhelper is an open source tool that
            helps you with tailwind classes. It can convert units, helps you
            choose colors, visualize how a font will look and more. Still a work
            in progress.
          </p>
          <p>
            When switching from working with css to working with tailwind, I
            sometimes forget what the tailwind class for a specific style is, so
            this tool helps me to stay productive when I code with tailwind.
          </p>
          <div className="mt-1 pt-4 border-t border-white">
            <p className="italic">Built using NextJS, Typescript and Tailwind CSS</p>
          </div>
          <div className="flex gap-4 justify-end">
            <div>Live Site</div>
            <div>Github</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectDisplay;
