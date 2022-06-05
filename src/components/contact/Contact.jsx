import { WhatsApp, Mail, Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import "./contact.scss";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="shake.svg" />
      </div>
      <div className="right">
        <div className="blank"></div>
        <h1>&lt; Contact Me /&gt;</h1>
        <div className="contactContainer">
          <WhatsApp style={{ fill: "#25D366" }} className="icon" />
          <span>+60168772499</span>
        </div>
        <div className="contactContainer">
          <Mail className="icon" />
          <span>seanleng99@gmail.com</span>
        </div>
        <div className="socialMediaContainer">
          <a href="https://www.facebook.com/Seanleng99/"><Facebook style={{ fill: "#3b5998" }} className="icon" /></a>
          <a href="https://www.linkedin.com/in/tan-sean-leng-921270211/"><LinkedIn style={{ fill: "#0077b5" }} className="icon" /></a>
          <a href="https://www.instagram.com/sean_leng99/"><Instagram style={{ fill: "#cd486b" }} className="icon" /></a>
        </div>

      </div>
    </div>
  );
}
