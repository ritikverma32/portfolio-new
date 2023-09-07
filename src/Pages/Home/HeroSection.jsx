export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ritik</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate frontend developer creating responsive and visually
            appealing web interfaces. Adept at translating UI/UX designs into
            efficient, high-quality code. Proficient in HTML, CSS, JavaScript,
            and modern frontend frameworks like React.
            <br />
            Committed to staying updated with the latest industry trends and
            best practices. Also have a knowledge of some designing softwares
            like figma.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/develop.png" alt="Hero Section" />
      </div>
    </section>
  );
}
