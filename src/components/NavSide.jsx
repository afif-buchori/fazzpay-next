import { useRouter } from "next/router";
import TopUp from "./TopUp";
import { useState } from "react";
import { useSelector } from "react-redux";
import Logout from "./Logout";

function NavSide(props) {
  const router = useRouter();
  const userStore = useSelector((state) => state.user.data);
  const [openTopup, setOpenTopup] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  // console.log(userStore.id);
  return (
    <>
      <TopUp isOpen={openTopup} onClose={() => setOpenTopup(false)} />
      <Logout
        logoutOpen={openLogout}
        logoutClose={() => setOpenLogout(false)}
      />
      <ul className="navside-content hidden md:flex">
        <li
          onClick={() => router.push("/dashboard")}
          className={`nav-side ${
            props.titlePage === "dashboard" && "navside-active"
          }`}
        >
          <i className="bi bi-grid"></i> Dashboard
        </li>
        <li
          onClick={() => router.push("/transfer")}
          className={`nav-side ${
            props.titlePage === "transfer" && "navside-active"
          }`}
        >
          <i className="bi bi-arrow-up"></i> Transfer
        </li>
        <li
          onClick={() => setOpenTopup(!openTopup)}
          className={`nav-side ${
            props.titlePage === "topup" && "navside-active"
          }`}
        >
          <i className="bi bi-plus-lg"></i> Top Up
        </li>
        <li
          onClick={() => router.push(`/profile/${userStore.id}`)}
          className={`nav-side ${
            props.titlePage === "profile" && "navside-active"
          }`}
        >
          <i className="bi bi-person"></i> Profile
        </li>
        <li onClick={() => setOpenLogout(true)} className="nav-side mt-auto">
          <i className="bi bi-box-arrow-right"></i> Logout
        </li>
      </ul>
    </>
  );
}

export default NavSide;
