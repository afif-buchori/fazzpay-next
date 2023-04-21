import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import PrivateRoute from "@/utils/wrapper/privateRoute";

function PersonalInfo() {
  const userStore = useSelector((state) => state.user);
  const [isCanSave, setCanSave] = useState(false);
  const dataUser = userStore.data;
  const [form, setForm] = useState({
    firstName: dataUser.firstName,
    lastName: dataUser.lastName,
  });
  const onChangeForm = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
    if (
      dataUser.firstName !== form.firstName ||
      dataUser.lastName !== form.lastName ||
      form.firstName !== "" ||
      form.lastName !== ""
    ) {
      setCanSave(true);
    }
  };
  const handleEditProfile = () => {
    console.log(form);
  };
  return (
    <Layout title="Personal Info">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="profile" />

          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white shadow py-10">
            <div className="w-full md:max-w-[400px] px-5 mr-auto">
              <h1 className="font-bold text-lg mb-5">Personal Information</h1>
              <p className="text-grey mb-6">
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
            </div>
            <span className="w-full flex flex-col p-5 gap-5">
              <div className="w-full flex flex-col rounded-xl shadow px-3 py-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={onChangeForm}
                  className="input-profile"
                  placeholder="Your first name"
                />
              </div>

              <div className="w-full flex flex-col rounded-xl shadow px-3 py-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={onChangeForm}
                  className="input-profile"
                  placeholder="Your last name"
                />
              </div>
              <div className="w-full flex flex-col rounded-xl shadow px-3 py-2">
                <label htmlFor="email">Verified E-mail</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={dataUser.email}
                  disabled={true}
                  className="input-profile text-grey"
                />
              </div>
              <div className="w-full flex flex-col rounded-xl shadow px-3 py-2">
                <label htmlFor="phone">Phone Number</label>
                <div className="w-full flex gap-4">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={dataUser.phone}
                    disabled={true}
                    className="input-profile w-full"
                  />
                  <Link
                    href={"/profile/edit-phone"}
                    className="text-prime hover:underline py-1 px-2 hover:bg-slate-400/30 rounded-lg"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            </span>
            {isCanSave && (
              <div>
                <button
                  disabled={
                    (dataUser.firstName === form.firstName &&
                      dataUser.lastName === form.lastName) ||
                    (form.firstName === "" && form.lastName === "")
                  }
                  onClick={handleEditProfile}
                  className="btn-prime"
                >
                  Save Change
                </button>
              </div>
            )}
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(PersonalInfo);
