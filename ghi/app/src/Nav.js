import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <NavLink className="navbar-brand fs-3" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <div className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" role="button" id="navbarDropDownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </div>
                    <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropDownMenuLink">
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/technician/new/">Add Technician</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/appointment/new/">Add Appointment</NavLink>
                        </li>
                    </div>
                </div>

                <div className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" role="button" id="navbarDropDownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Sales
                    </div>
                    <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropDownMenuLink">
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/customers/new/">Add Customer</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/automobilesales/new/">Add Automobile Sale</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/salespeople/new">Add New Sales Person</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/automobilesales/">List of Automobile Sales</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/salespeople/">List of Sales By Employee</NavLink>
                        </li>
                    </div>
                </div>

                <div className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" role="button" id="navbarDropDownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Inventory
                    </div>
                    <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropDownMenuLink">
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/manufacturers/new">Add New Manufacturer</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/models/new">Add New Vehicle Model</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/automobiles/new">Add New Automobile to Inventory</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/manufacturers/">List of Manufacturers</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/models/">List of Vehicle Models</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink className="nav-link" aria-current="page" to="/automobiles">List of Automobile Inventory</NavLink>
                        </li>
                    </div>
                </div>

            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Nav;
