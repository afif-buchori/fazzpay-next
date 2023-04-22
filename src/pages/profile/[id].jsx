import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import PrivateRoute from "@/utils/wrapper/privateRoute";
import Logout from "@/components/Logout";

function Profile() {
  const userStore = useSelector((state) => state.user);
  const [showLogout, setShowLogout] = useState(false);
  const dataUser = userStore.data;
  // console.log(userStore);
  return (
    <Layout title="Profile">
      <Header />
      <Logout
        logoutOpen={showLogout}
        logoutClose={() => setShowLogout(false)}
      />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="profile" />

          <div className="flex-1 flex flex-col justify-center items-center gap-4 rounded-3xl bg-white shadow py-10">
            <span className="w-full flex flex-col items-center">
              <div className="avatar">
                <div className="w-20 mask mask-squircle">
                  <Image
                    src="/images/users.webp"
                    alt="display-user"
                    width="50"
                    height="50"
                    className="w-full"
                  />
                </div>
              </div>
              <label htmlFor="inputImage" className="mt-3 mb-6 cursor-pointer">
                <i className="bi bi-pencil mr-4"></i>
                Edit
                <input
                  type="file"
                  name="image"
                  id="inputImage"
                  className="hidden"
                />
              </label>
              <h2 className="text-xl font-bold">{`${dataUser.firstName} ${dataUser.lastName}`}</h2>
              <p className="mt-4 mb-8">{dataUser.phone}</p>
            </span>
            <div className="w-full md:w-3/5 flex flex-col gap-4">
              <Link
                href={"/profile/personal-info"}
                className="btn btn-ghost bg-slate-400/20 capitalize font-bold flex justify-between"
              >
                Personal Information
                <i className="bi bi-arrow-right text-xl"></i>
              </Link>
              <Link
                href={"/profile/change-password"}
                className="btn btn-ghost bg-slate-400/20 capitalize font-bold flex justify-between"
              >
                Change Password
                <i className="bi bi-arrow-right text-xl"></i>
              </Link>
              <Link
                href={"/profile/change-pin"}
                className="btn btn-ghost bg-slate-400/20 capitalize font-bold flex justify-between"
              >
                Change PIN
                <i className="bi bi-arrow-right text-xl"></i>
              </Link>
              <button
                onClick={() => setShowLogout(true)}
                className="btn btn-ghost bg-slate-400/20 capitalize font-bold flex justify-between"
              >
                Logout
                <i className="bi bi-box-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(Profile);
