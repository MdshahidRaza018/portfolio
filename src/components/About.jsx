import myImage from "../assets/image.jpg"
import BlurCircle from "./BlurCircle";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "12+", label: "Projects Completed" },
  { number: "10+", label: "Happy Clients" },
  { number: "2", label: "Awards Won" },
];

const About = () => {
  return (
    <section id="about" className="px-6 lg:px-16 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light">
          About <span className="text-accent font-semibold">Me</span>
        </h2>
        <p className="text-muted mt-3 max-w-2xl mx-auto">
          I am a passionate frontend / MERN developer who loves building
          modern, scalable and user-friendly web applications.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left: Image */}
        <div className="relative">
          <img
            src={myImage}
            alt="profile"
            className="rounded-full grayscale"
          />

       
        </div>

        {/* Right: Content */}
        <div>
          <h3 className="text-2xl mb-4">
            Who am I?
          </h3>

          <p className="text-muted leading-relaxed mb-6">
            I specialize in creating visually appealing and high-performance
            websites using React, Tailwind CSS, Node.js and MongoDB.
            I enjoy solving real-world problems and turning ideas into
            functional digital products.
          </p>

          <p className="text-muted leading-relaxed mb-8">
            My focus is on clean code, responsive design, performance
            optimization and user experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="bg-card p-5 rounded-xl text-center border border-white/5"
              >
                <h4 className="text-2xl font-semibold text-accent">
                  {stat.number}
                </h4>
                <p className="text-xs text-muted mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <BlurCircle top="1200px" right="0px"/>
        <BlurCircle top="1800px" right="400px"/>


      </div>
    </section>
    
  );
};

export default About;
