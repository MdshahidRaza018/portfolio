import BlurCircle from "./BlurCircle";

const projects = [
  {
    title: "Creative Landing Page",
    category: "UI / UX Design",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    title: "Mobile App Design",
    category: "App Design",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
  {
    title: "Dashboard Interface",
    category: "Web App",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
  },
];

const Projects = () => {
  return (
    <section className="px-6 lg:px-16 py-24">

      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-light">
            Latest <span className="text-accent font-semibold">Projects</span>
          </h2>
          <p className="text-muted text-sm mt-2">
            Some of my recent works that showcase quality & creativity
          </p>
        </div>

        <button className="hidden md:block bg-gradient-to-r from-black to-blue-800 px-6 py-2.5 rounded-full text-sm shadow-glow">
          View all Projects
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-xl overflow-hidden border border-white/5"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="h-64 w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
              <span className="text-xs text-accent mb-1">
                {project.category}
              </span>
              <h3 className="text-lg font-medium">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden flex justify-center mt-10">
        <button className="bg-accent px-7 py-3 rounded-full shadow-glow">
          View all Projects
        </button>
      </div>
        <BlurCircle top="220rem" right="0"/>

    </section>
  );
};

export default Projects;
