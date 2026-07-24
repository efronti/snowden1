import Link from "next/link";
export default function CTA({title="A custom home begins with the right conversation.", text="Tell us what you are considering, where you hope to build and what matters most in your future home."}) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="cta-band grid grid-2">
          <div><small>Start here</small><h2>{title}</h2><p>{text}</p></div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}><Link className="btn btn-light" href="/contact">Discuss Your Project →</Link></div>
        </div>
      </div>
    </section>
  );
}
