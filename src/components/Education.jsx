import shecodesLogo from "../assets/icons/shecodes.png";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>

      <div className="education-item">
        <img
          src={shecodesLogo}
          alt="SheCodes logo"
          className="education-logo"
        />

        <h3>Coding Bootcamp 2026</h3>

        <div className="education-details">
          HTML • CSS • JavaScript • React • Responsive
        </div>
      </div>
    </section>
  );
}

export default Education;
