import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import { useState } from "react";
import PrivateRoute from "@/utils/wrapper/privateRoute";

function EditPhone() {
  const [isInvalid, setInvalid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [phoneValue, setPhoneVal] = useState("");

  const onChangeInput = (event) => {
    setPhoneVal(event.target.value);
  };
  return (
    <Layout title="Personal Info">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="profile" />

          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white shadow py-10">
            <div className="w-full md:max-w-[400px] px-5 mr-auto">
              <h1 className="font-bold text-lg mb-5">Edit Phone Number</h1>
              <p className="text-grey mb-6">
                Add at least one phone number for the transfer ID so you can
                start transfering your money to another user.
              </p>
            </div>
            <form action="" className="w-full md:w-3/5 px-5 md:px-0">
              <label
                htmlFor="phone"
                className={`label-input ${
                  isInvalid && "border-secondary"
                } mt-7 md:mt-14`}
              >
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phoneValue}
                  onChange={onChangeInput}
                  placeholder="Enter your phone number"
                  className="w-full"
                />
                <p className="font-bold">+62</p>
                <i
                  className={`icon-input bi bi-telephone ${
                    isInvalid ? "text-secondary" : "text-grey"
                  }`}
                ></i>
              </label>
            </form>
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(EditPhone);
