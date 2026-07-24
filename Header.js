import Link from "next/link";
export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Snowden Builders home">
          <span className="brand-mark">S</span>
          <span>SNOWDEN BUILDERS</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/custom-homes">Custom Homes</Link>
          <Link href="/build-on-your-lot">Build on Your Lot</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/projects">Our Work</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/locations">Locations</Link>
          <Link className="btn" href="/contact">Start a Conversation</Link>
        </nav>
        <span className="mobile-note">Menu in production build</span>
      </div>
    </header>
  );
}
