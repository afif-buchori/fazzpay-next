import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import NavSide from "@/components/NavSide";
import DashbBalance from "@/components/Pages/DashbBalance";
import DashbDiagram from "@/components/Pages/DashbDiagram";
import DashbHistory from "@/components/Pages/DashbHistory";
import PrivateRoute from "@/utils/wrapper/privateRoute";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const controller = useMemo(() => new AbortController(), []);
  const userStore = useSelector((state) => state.user);
  const token = userStore.token;
  const userId = userStore.data.id;

  return (
    <Layout title="Dashboard">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="dashboard" />

          <div className="flex-1 flex flex-col gap-7">
            {/* BALANCE */}
            <span className="w-full flex bg-prime shadow rounded-3xl p-5 md:p-7">
              <DashbBalance
                userId={userId}
                token={token}
                controller={controller}
              />
              <div className="min-w-[165px] flex flex-col gap-4">
                <button className="btn-action">
                  <i className="bi bi-arrow-up mr-2"></i>Transfer
                </button>
                <button className="btn-action">
                  <i className="bi bi-plus-lg mr-2"></i>Top Up
                </button>
              </div>
            </span>
            <div className="w-full h-full flex flex-col md:flex-row gap-7">
              {/* DIAGRAM */}
              <span className="flex-1 rounded-3xl h-full bg-white shadow p-5 md:p-7">
                <DashbDiagram
                  userId={userId}
                  token={token}
                  controller={controller}
                />
              </span>
              {/* HISTORY */}
              <span className="flex-1 rounded-3xl flex flex-col bg-white shadow p-5 md:p-7">
                <div className="w-full flex justify-between items-center mb-4">
                  <h3 className="font-bold">Transaction History</h3>
                  <p className="btn btn-link btn-xs">See all</p>
                </div>
                <DashbHistory token={token} controller={controller} />
              </span>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(Dashboard);
