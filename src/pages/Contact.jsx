import { ArrowUpRight } from "lucide-react";
export default function Contact() {
  return (
    <section className="contact section-pad page-section">
      <div className="contact-star">✳</div>
      <h1 className="section-title">
        Contact<span> .</span>
      </h1>
      <h2>
        Have a project
        <br />
        in mind?
      </h2>
      <a className="contact-email" href="mailto:biswajitdebnath249@gmail.com">
        biswajitdebnath249@gmail.com <ArrowUpRight size={26} />
      </a>
    </section>
  );
}
