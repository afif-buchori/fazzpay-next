import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import { PinField } from "react-pin-field";
import { useState } from "react";
import PrivateRoute from "@/utils/wrapper/privateRoute";

function ChangePin() {
  const [isInvalid, setInvalid] = useState(false);
  const [pin, setPin] = useState("");

  const handlePinChange = (value) => {
    setPin(value);
    setInvalid(false);
  };

  return (
    <Layout title="Change PIN">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="profile" />

          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white shadow py-10">
            <div className="w-full md:max-w-[400px] px-5 mr-auto">
              <h1 className="font-bold text-lg mb-5">Change PIN</h1>
              <p className="text-grey mb-6">
                Enter your current 6 digits Fazzpay PIN below to continue to the
                next steps.
              </p>
            </div>
            <form action="" className="w-full md:w-3/5 px-5 md:px-0">
              <div className="input-pin flex justify-between my-10">
                <PinField
                  length={6}
                  onChange={handlePinChange}
                  type="numeric"
                  pattern="\d"
                  inputMode="numeric"
                  autoSelect={true}
                />
              </div>
            </form>
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(ChangePin);
