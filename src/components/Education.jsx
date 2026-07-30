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

        <h3>SheCodes</h3>

        <p>Front-End Development Program</p>

        <p>HTML • CSS • JavaScript • React • Responsive Design</p>

        <p>2026</p>
      </div>
    </section>
  );
}

export default Education;
