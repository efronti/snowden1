import Link from "next/link";
import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid footer-grid">
          <div>
            <div className="brand"><span className="brand-mark">S</span><span>SNOWDEN BUILDERS</span></div>
            <p style={{marginTop:20,maxWidth:420,color:"rgba(255,255,255,.68)"}}>
              Custom homes built through careful planning, trusted relationships and a commitment to doing the work well.
            </p>
          </div>
          <div><small>Explore</small><Link href="/custom-homes">Custom Homes</Link><Link href="/build-on-your-lot">Build on Your Lot</Link><Link href="/projects">Our Work</Link><Link href="/process">Our Process</Link></div>
          <div><small>Learn</small><Link href="/resources">Resource Center</Link><Link href="/locations">Areas We Serve</Link><Link href="/contact">Project Inquiry</Link></div>
          <div><small>Contact</small><a href={`tel:${site.phone}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p style={{color:"rgba(255,255,255,.68)"}}>{site.address}</p></div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Snowden Builders LLC. Prototype content must be reviewed before publication.</div>
      </div>
    </footer>
  );
}
