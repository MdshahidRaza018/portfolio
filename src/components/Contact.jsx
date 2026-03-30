import { useState } from "react";
import axios from "axios";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import BlurCircle from "./BlurCircle";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      alert(res.data.message);
      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="px-6 lg:px-16 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light">
          Get in <span className="text-accent font-semibold">Touch</span>
        </h2>
        <p className="text-muted mt-3">
          Have a project idea or want to work together? Let’s talk.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-2">Contact Information</h3>
            <p className="text-muted text-sm">
              Feel free to reach out to me anytime.
            </p>
          </div>

          <div className="space-y-4 text-sm text-muted">
            <p>📞 <span className="ml-2">+91 9142315458</span></p>
            <p>✉ <span className="ml-2">mdshahidraza77866@gmail.com</span></p>
            <p>📍 <span className="ml-2">Ranchi Jharkhand,834001</span></p>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/md-shahid-raza-190b96245?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-10 h-10 text-xl font-bold flex items-center justify-center rounded-full bg-card hover:border hover:border-accent">
              in
            </a>

            <a href="https://www.instagram.com/mdshahid.raza_018?igsh=Y21jYXN6bjU3Ymd5" className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:border hover:border-accent">
              <InstagramIcon />
            </a>

            <a href="https://github.com/MdshahidRaza018"className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:border hover:border-accent">
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 rounded-xl border border-white/5 space-y-6"
        >

          <div>
            <label className="text-sm text-muted">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mt-2 bg-bg border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="text-sm text-muted">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="gmail.com"
              className="w-full mt-2 bg-bg border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="text-sm text-muted">Message</label>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full mt-2 bg-bg border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-accent resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-black to-blue-800 px-8 py-3 rounded-full hover:opacity-90"
          >
            Send Message
          </button>

        </form>
      </div>
        <BlurCircle top="250rem" left="0"/>

    </section>
  );
};

export default Contact;