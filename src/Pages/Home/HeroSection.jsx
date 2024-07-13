export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vikas</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
            </h1>
            <p className="hero--section-description">
            Building Seamless Web Applications with Frontend, Backend, UI/UX, and Webflow Expertise
          </p>
          <a  href="https://www.linkedin.com/in/vikas-gurav/"
          target="_blank"
          rel="noreferrer">
          <button className="btn btn-primary">Get In Touch</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
  