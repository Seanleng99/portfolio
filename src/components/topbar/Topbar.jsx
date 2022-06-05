import "./topbar.scss";
import { Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            seanleng.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>seanleng99@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
