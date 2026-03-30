import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>

      <Navbar />

      <main className="pt-16">
        <Routes>

          {/* Main portfolio page */}
          <Route path="/" element={
            <>
              <section id="home">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </>
          }/>

          {/* Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </main>

      <Footer />

    </>
  )
}

export default App