function NavSide({ onClicks, infoContent }) {
  const handleClick = (info) => {
    onClicks(info);
  };
  return (
    <ul className="navside-content hidden md:flex">
      <li
        onClick={() => handleClick("home")}
        className={`nav-side ${infoContent === "home" && "navside-active"}`}
      >
        <i className="bi bi-grid"></i> Dashboard
      </li>
      <li
        onClick={() => handleClick("transfer")}
        className={`nav-side ${infoContent === "transfer" && "navside-active"}`}
      >
        <i className="bi bi-arrow-up"></i> Transfer
      </li>
      <li
        onClick={() => handleClick("topup")}
        className={`nav-side ${infoContent === "topup" && "navside-active"}`}
      >
        <i className="bi bi-plus-lg"></i> Top Up
      </li>
      <li
        onClick={() => handleClick("profile")}
        className={`nav-side ${infoContent === "profile" && "navside-active"}`}
      >
        <i className="bi bi-person"></i> Profile
      </li>
      <li onClick={() => handleClick("logout")} className="nav-side mt-auto">
        <i className="bi bi-box-arrow-right"></i> Logout
      </li>
    </ul>
  );
}

export default NavSide;
