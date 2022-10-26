import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
                <div className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" role="button" id="navbarDropDownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Automobile Sales
                    </div>
                    <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropDownMenuLink">
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/salespeople/new/">Add Sales Person</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/automobilesales/new/">Add Automobile Sale</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/customers/new/">Add Customer</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/technician/new/">Add Technician</NavLink>
                        </li>
                    </div>
                </div>
          </div>
        </nav>
  )
}

export default Nav;
