import myImage from "../assets/image.jpg"
import BlurCircle from "./BlurCircle";
const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <section className="grid md:grid-cols-2 items-center px-10 py-5 gap-10">
      
      {/* Left */}
      <div>
        <BlurCircle top="100px" left="0px"/>

        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          This is your <br />
          designer <br />
          <span className="text-accent font-semibold">
           MD SHAHID RAZA
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-md">
          I help brands and startups build high quality digital products with modern UI and clean experience.
        </p>

        <div className="flex gap-5 mt-8">
          {/* <button className="bg-gradient-to-r from-blue-300 to-blue-700 px-6 py-3 rounded-full">
            Discuss for Projects
          </button> */}
          {/* <button className="flex items-center gap-2 text-gray-300">
            View Portfolio →
          </button> */}
      <button onClick={() => scrollTo("contact")} className="relative overflow-hidden px-8 py-3 rounded-full font-medium
bg-gradient-to-r from-black to-blue-800 text-white
transition-all duration-300 hover:scale-105 active:scale-95
shadow-lg hover:shadow-purple-500/40">

  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] 
  hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

  <span className="relative z-10">
    Discuss for Projects
  </span>

</button>
        </div>
      </div>
        <BlurCircle top="800px" left="0px"/>

      {/* Right */}
      <div className="relative">
        <img
          src={myImage}
          className="p-[4px] grayscale rounded-full bg-zinc-200 shadow-emerald-800"
        />

           {/* Floating badge */}
          {/* <div className="absolute top-14 -left-6 bg-card px-6 py-4 rounded-xl border border-white/10  bg-gradient-to-r from-black to-blue-700">
            <p className="text-sm text-muted">Available for work</p>
          </div> */}
      </div>
      

    </section>
  );
};

export default Home;
