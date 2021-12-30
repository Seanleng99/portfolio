import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Engineer", "Software Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Profile.png" alt="Seanleng's profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Tan Sean Leng</h1>
          <h3>
            Entry <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
