import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import PrivateRoute from "@/utils/wrapper/privateRoute";
import Image from "next/image";
import CardReceiver from "@/components/Pages/CardReceiver";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "@/utils/https/transaction";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import Loaders from "@/components/Loaders";

function Transfer() {
  const router = useRouter();
  const controller = useMemo(() => new AbortController(), []);
  const token = useSelector((state) => state.user.token);
  const [dataUsers, setDataUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchPar, setSearchPar] = useState("");
  const [metaPage, setMetaPage] = useState(1);
  const [metaLimit, setMetaLimit] = useState(4);

  const fetching = async () => {
    setLoading(true);
    // router.push({
    //   pathname: "/transfer",
    //   query: {
    //     limit: router.query.page,
    //     page: router.query.page,
    //     search: searchPar,
    //   },
    // });
    const params = { page: metaPage, limit: metaLimit, search: searchPar };
    // console.log(router.query);
    try {
      const result = await getUsers(token, params, controller);
      // console.log(result);
      setDataUser(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metaPage, searchPar]);

  const onSearching = debounce((event) => {
    setMetaPage(1);
    setSearchPar(event.target.value);
  }, 700);

  const handlePagination = (info) => {
    if (info === "next") return setMetaPage(metaPage + 1);
    if (info === "prev") return setMetaPage(metaPage - 1);
  };

  return (
    <Layout title="Transfer">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="transfer" />

          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white shadow px-5 py-6">
            <h1 className="font-bold text-lg mb-5 mr-auto">Search Receiver</h1>
            <span className="w-full rounded-lg bg-slate-400/20 px-4 py-3 text-lg">
              <label htmlFor="search" className="flex">
                <i class="bi bi-search mr-4"></i>
                <input
                  type="text"
                  id="search"
                  name="search"
                  onChange={onSearching}
                  className="bg-transparent w-full focus:outline-none"
                />
              </label>
            </span>
            <div className="w-full flex flex-col gap-5 md:px-5 py-5">
              {isLoading ? (
                <div className="w-full h-full flex justify-center items-center py-10">
                  <Loaders />
                </div>
              ) : dataUsers.length < 1 ? (
                <p className="text-center text-2xl font-bold my-10">
                  Data Not Found
                </p>
              ) : (
                dataUsers.map((user, idx) => (
                  <CardReceiver
                    key={idx}
                    userId={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    img={user.image}
                    tlp={user.noTelp}
                  />
                ))
              )}
            </div>
            <div className="btn-group mt-auto">
              <button
                onClick={() => handlePagination("prev")}
                disabled={metaPage === 1}
                className="btn btn-info btn-outline btn-sm"
              >
                Prev
              </button>
              <button className="btn btn-info btn-outline btn-sm">
                Page {metaPage}
              </button>
              <button
                onClick={() => handlePagination("next")}
                className="btn btn-info btn-outline btn-sm"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(Transfer);
