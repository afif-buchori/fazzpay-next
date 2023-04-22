import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import PrivateRoute from "@/utils/wrapper/privateRoute";
import ChngeCheckPin from "@/components/Pages/ChngeCheckPin";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ChngeEditPin from "@/components/Pages/ChngeEditPin";

function ChangePin() {
  const controller = useMemo(() => new AbortController(), []);
  const userState = useSelector((state) => state.user);
  const dataAuth = {
    token: userState.token,
    userId: userState.data.id,
    controller,
  };
  const [showCheckPin, setShowCheck] = useState(true);
  const [showEditPin, setShowEdit] = useState(false);
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
                {(showCheckPin &&
                  "Enter your current 6 digits Fazzpay PIN below to continue to the next steps.") ||
                  (showEditPin &&
                    "Type your new 6 digits security PIN to use in Fazzpay.")}
              </p>
            </div>
            <ChngeCheckPin
              dataAuth={dataAuth}
              isShow={showCheckPin}
              onClose={() => {
                setShowCheck(false);
                setShowEdit(true);
              }}
            />
            <ChngeEditPin
              dataAuth={dataAuth}
              isShow={showEditPin}
              onClose={() => {
                setShowEdit(false);
              }}
            />
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(ChangePin);
