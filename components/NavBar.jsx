import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark mb-3">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/all">All Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/add">Add Users</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item text-light" href="/">Action</a></li>
            <li><a className="dropdown-item text-light" href="/">Another action</a></li>
            
            <li><a className="dropdown-item text-light" href="/">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

