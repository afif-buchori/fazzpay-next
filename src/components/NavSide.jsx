function NavSide() {
  return (
    <ul className="navside-content hidden md:flex">
      <li className="nav-side navside-active">
        <i className="bi bi-grid"></i> Dashboard
      </li>
      <li className="nav-side">
        <i className="bi bi-arrow-up"></i> Transfer
      </li>
      <li className="nav-side">
        <i className="bi bi-plus-lg"></i> Top Up
      </li>
      <li className="nav-side">
        <i className="bi bi-person"></i> Profile
      </li>
      <li className="nav-side mt-auto">
        <i className="bi bi-box-arrow-right"></i> Logout
      </li>
    </ul>
  );
}

export default NavSide;
