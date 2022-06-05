import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "rgb(240, 212, 233)",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 700,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.7,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 7 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default App;
