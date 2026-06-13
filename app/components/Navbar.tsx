export default function Navbar() {
  return (
    <nav className="heavy-border navbar">
      <div className="navbar-brand">
        Graphic Multiverse
      </div>
      <div className="nav-links">
        <a href="#about" className="btn btn-secondary">About</a>
        <a href="#projects" className="btn btn-primary">View Comics</a>
      </div>
    </nav>
  );
}
