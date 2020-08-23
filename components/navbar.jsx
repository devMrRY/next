import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Next Mart</a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
