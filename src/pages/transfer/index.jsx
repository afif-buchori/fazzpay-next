import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import PrivateRoute from "@/utils/wrapper/privateRoute";

function Transfer() {
  return (
    <Layout title="Change PIN">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="transfer" />

          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white shadow px-5 py-10">
            <h1 className="font-bold text-lg mb-5">Search Receiver</h1>
            <span className="w-full rounded-lg bg-slate-400/20 px-4 py-3 text-lg">
              <label htmlFor="search" className="flex">
                <i class="bi bi-search mr-4"></i>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="bg-transparent w-full"
                />
              </label>
            </span>
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(Transfer);
