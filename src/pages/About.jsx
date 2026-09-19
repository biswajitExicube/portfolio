import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  ["Software Developer", "Exicube App Soluations"],
  ["Software Developer", "Navigator Software Private Limited"],
  ["Software Developer", "Influxiqtech Private Limited"],
  ["Senior Software Developer", "Anhad Technocrafts"],
];

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.";
const detail =
  "Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.";
const skills = [
  ["React", "Building accessible, reusable interfaces with component-driven architecture."],
  ["Next.js", "Creating fast, SEO-friendly web experiences with modern React tooling."],
  ["Angular", "Developing structured, scalable applications with a robust framework."],
  ["HTML5", "Creating semantic page structures that work across modern browsers."],
  ["CSS3", "Crafting responsive layouts and polished visual details for every screen."],
];

export default function About() {
  const [lineProgress, setLineProgress] = useState({});
  const experienceRefs = useRef([]);

  useEffect(() => {
    let frameId;
    const updateProgress = () => {
      frameId = undefined;
      const start = window.innerHeight * 0.82;
      const rawProgress = {};
      experienceRefs.current.forEach((element, index) => {
        if (!element) return;
        const bounds = element.getBoundingClientRect();
        const distance = start + bounds.height * 0.15;
        rawProgress[index] = Math.min(1, Math.max(0, (start - bounds.top) / distance));
      });
      const nextProgress = {};
      experiences.forEach((_, index) => {
        const previousComplete = index === 0 || nextProgress[index - 1] === 1;
        nextProgress[index] = previousComplete ? (rawProgress[index] ?? 0) : 0;
      });
      setLineProgress(nextProgress);
    };
    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };
    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <section className="about section-pad page-section">
        <div className="section-heading">
          <h1 className="section-title">
            About<span> .</span>
          </h1>
        </div>
        <div className="about-content">
          <h2>
            Good design should
            <br />
            feel <em>inevitable.</em>
          </h2>
          <div>
            <p>
              I’m Biswajit Debnath, an independent frontend developer with a
              soft spot for beautifully simple digital experiences. I work with
              ambitious teams to turn ideas into sites and products people enjoy
              using.
            </p>
            <p>
              My approach balances a sharp eye for detail with the practical
              thinking needed to ship meaningful work.
            </p>
            <a className="underlink" href="mailto:hello@alexmorgan.dev">
              Let’s work together <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="skills">
          {skills.map(([name, content]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{content}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="my-experience section-pad"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className="section-title">
          My Experience<span>.</span>
        </h2>
        <div className="experience-timeline">
          {experiences.map(([role, company], index) => (
            <article
              className="experience-entry"
              key={company}
              ref={(element) => {
                experienceRefs.current[index] = element;
              }}
            >
              <div className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="experience-line" aria-hidden="true" style={{ '--line-progress': lineProgress[index] ?? 0 }} />
              <div className="experience-copy">
                <p className="experience-role">{role}</p>
                <h3>{company}</h3>
                <p>{description}</p>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
