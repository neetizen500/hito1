import { formatCurrency } from "../utils/formatCurrency";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          🍕 Pizzería Mamma Mia!
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <button className="btn btn-outline-light my-1">🍕 Home</button>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light my-1">
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light my-1">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light my-1">
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light my-1">
                    🔐 Register
                  </button>
                </li>
              </>
            )}

            <li className="nav-item">
              <button className="btn btn-light fw-bold my-1">
                🛒 Total: ${formatCurrency(total)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
