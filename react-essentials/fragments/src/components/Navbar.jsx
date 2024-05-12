import Logo from "./Logo";
// Use fragment <></> to conditionally display login / dashboard + signout
export default function Navbar() {
  const isAuthUser = true;

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Logo />
        <div className="navbar-links">
          {isAuthUser ? (
            <>
              <a href="#" className="navbar-link">
                Dashboard
              </a>
              <a href="#" className="navbar-link">
                Sign out
              </a>
            </>
          ) : (
            <a href="#" className="navbar-link">
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
