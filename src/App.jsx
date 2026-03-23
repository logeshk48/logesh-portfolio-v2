import './App.css'
import ProfileCard from './ProfileCard'
import logeshImg from './assets/logesh.jpg'
import TechStack from './components/TechStack/TechStack'
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-tag">AI POWERED WEB DEVELOPER</p>

              <h1>
                Building modern,
                <span> premium web experiences</span>
              </h1>

              <p className="hero-description">
                I’m Logesh — crafting clean, modern, and powerful web experiences with a
                focus on performance, design, and real-world impact.
              </p>
            </div>

            <div className="hero-right">
              <ProfileCard
                name="Logesh"
                title="AI Powered Web Developer"
                handle="logesh.dev"
                status="Available"
                contactText="Contact Me"
                avatarUrl={logeshImg}
              />
            </div>
          </div>
        </section>
        <TechStack />
        <section id="projects" style={{ height: "60vh" }}></section>
        <section id="contact" style={{ height: "60vh" }}></section>
        
      </main>
    </div>
  )
}

export default App