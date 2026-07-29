import profilePhoto from "../assets/mariana.jpeg";

function Hero() {
  return (
    <section className="hero-container">
      <p className="hero-introduction">Hi 👋 I’m Mariana</p>

      <div className="hero-image">
        <img src={profilePhoto} alt="Portrait of Mariana" />
      </div>

      <div className="hero-text">
        Junior Front-End Developer
        <br />
        with a strong visual eye
      </div>

      <div className="hero-description">
        👩‍💻 I build responsive websites and React applications with intuitive,
        user-friendly interfaces
      </div>
    </section>
  );
}

export default Hero;
