import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import BlurCircle from './BlurCircle';
const Footer = () => {
  return (
    <footer className="border-t border-white/5 px-6 lg:px-16 py-16  ">

      <div className="grid md:grid-cols-3 gap-10">

        {/* Left: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent text-xl">●</span>
            <h2 className="text-lg font-semibold">designer</h2>
          </div>

          <p className="text-muted text-sm max-w-xs">
            Building modern, scalable and user-friendly web applications
            with clean UI and great user experience.
          </p>
        </div>

        {/* Middle: Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right: Socials */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/md-shahid-raza-190b96245?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="w-10 h-10 font-bold text-xl flex items-center justify-center rounded-full bg-card border border-white/5 hover:border-accent transition"
            >
              in
            </a>
            <a
              href="https://www.instagram.com/mdshahid.raza_018?igsh=Y21jYXN6bjU3Ymd5"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-white/5 hover:border-accent transition"
            >
              <InstagramIcon/>
            </a>
            <a
              href="https://github.com/MdshahidRaza018"
              className="w-10 h-10  flex items-center justify-center rounded-full bg-card border border-white/5 hover:border-accent transition"
            >
              <GitHubIcon/>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
        <p>© {new Date().getFullYear()} designer. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Designed & Built with ❤️ by You
        </p>
      </div>
        <BlurCircle top="280rem" right="0"/>

    </footer>
  );
};

export default Footer;
