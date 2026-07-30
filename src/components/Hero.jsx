import profilePhoto from "../assets/mariana.jpeg";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

function Hero() {
  return (
    <section className="hero-container">
      <p className="hero-introduction">Hi 👋 I’m Mariana</p>

      <div className="hero-image">
        <img src={profilePhoto} alt="Portrait of Mariana" />
      </div>

      <h1 className="hero-text">
        Junior Front-End Developer
        <br />
        with a strong visual eye
      </h1>

      <div className="hero-description">
        👩‍💻 I build responsive websites and React applications with intuitive,
        user-friendly interfaces
      </div>

      <div className="hero-role">
        Currently seeking a remote Junior Front-End Developer role.
      </div>

      <div className="hero-links">
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
