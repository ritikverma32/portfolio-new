export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aboutnew.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
           I am an aspiring Frontend Developer.
          </p>
          <p className="hero--section-description">
            - Developed and maintained dynamic web applications using HTML, CSS,
            and JavaScript.
            <br />
            - Collaborated closely with UI/UX designers to ensure seamless
            integration of designs into functional user interfaces.
            <br />
            - Implemented responsive design principles for optimal user
            experience across various devices and screen sizes.
            <br />
            - Utilized React Framework to streamline development
            and enhance code maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
