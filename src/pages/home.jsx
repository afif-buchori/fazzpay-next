import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LayoutPrivate from "@/components/LayoutPrivate";
import NavSide from "@/components/NavSide";
import TopUp from "@/components/TopUp";
import { getDashboard, getProfile } from "@/utils/https/user";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const controller = useMemo(() => new AbortController(), []);
  const userStore = useSelector((state) => state.user);
  const token = userStore.token;
  const userId = userStore.data.id;

  const [openTopup, setOpenTopup] = useState(false);
  const [infoContent, setInfoContent] = useState("home");
  const handleNavside = (info) => {
    console.log(info);
    if (info === "topup") {
      setOpenTopup(true);
      setInfoContent(info);
    }
  };

  const [dataDashboard = setDataDashboard] = useState({});

  const fetching = async () => {
    try {
      const result = await getDashboard(token, userId, controller);
      console.log(result);
      // const ressprof = await getProfile(token, userId, controller);
      // console.log(ressprof);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LayoutPrivate title="Home">
      <TopUp
        isOpen={openTopup}
        onClose={() => {
          setOpenTopup(false);
          setInfoContent("home");
        }}
      />
      <Header />
      <section className="w-full bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide onClicks={handleNavside} infoContent={infoContent} />

          <div className="flex-1 flex flex-col gap-7">
            {/* BALANCE */}
            <span className="w-full flex bg-prime shadow rounded-3xl p-5 md:p-7">
              <div className="text-white flex flex-col justify-between">
                <p className="text-sm md:text-base">Balance</p>
                <h3 className="font-bold text-2xl md:text-4xl">
                  Rp.{" "}
                  {(userStore.data.balance &&
                    userStore.data.balance.toLocaleString("id-ID")) ||
                    0}
                </h3>
                <p className="text-sm md:text-base">
                  {userStore.data.phone || "-"}
                </p>
              </div>
              <div className="ml-auto flex flex-col gap-4">
                <button className="btn-action">
                  <i className="bi bi-arrow-up mr-2"></i>Transfer
                </button>
                <button className="btn-action">
                  <i className="bi bi-plus-lg mr-2"></i>Top Up
                </button>
              </div>
            </span>
            <div className="w-full flex flex-col md:flex-row gap-7">
              {/* DIAGRAM */}
              <span className="flex-1 rounded-3xl bg-white shadow p-5 md:p-7">
                <div className="flex w-full h-80 bg-slate-700"></div>
              </span>
              {/* HISTORY */}
              <span className="flex-1 rounded-3xl flex flex-col bg-white shadow p-5 md:p-7">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-bold">Transaction History</h3>
                  <p className="btn btn-link btn-xs">See all</p>
                </div>
                <section className="w-full flex flex-col gap-7 mt-5">
                  {/* user1 */}
                  <div className="w-full flex gap-4 items-center">
                    <span className="w-14 h-14 border rounded-xl"></span>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-bold">Samuel Suhi</h4>
                      <p className="text-[#7A7886]">Accept</p>
                    </div>
                    <p className="text-green-500 font-bold ml-auto">
                      {" "}
                      +Rp 50.000
                    </p>
                  </div>
                  {/* user2 */}
                  <div className="w-full flex gap-4 items-center">
                    <span className="w-14 h-14 border rounded-xl"></span>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-bold">Netflix</h4>
                      <p className="text-[#7A7886]">Transfer</p>
                    </div>
                    <p className="text-secondary font-bold ml-auto">
                      {" "}
                      -Rp 149.000
                    </p>
                  </div>
                  {/* user3 */}
                  <div className="w-full flex gap-4 items-center">
                    <span className="w-14 h-14 border rounded-xl"></span>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-bold">Christine Mar...</h4>
                      <p className="text-[#7A7886]">Accept</p>
                    </div>
                    <p className="text-green-500 font-bold ml-auto">
                      {" "}
                      +Rp 150.000
                    </p>
                  </div>
                  {/* user4 */}
                  <div className="w-full flex gap-4 items-center">
                    <span className="w-14 h-14 border rounded-xl"></span>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-bold">Robert Chandler</h4>
                      <p className="text-[#7A7886]">Tou Up</p>
                    </div>
                    <p className="text-secondary font-bold ml-auto">
                      {" "}
                      -Rp 249.000
                    </p>
                  </div>
                </section>
              </span>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </LayoutPrivate>
  );
}

export default Home;
