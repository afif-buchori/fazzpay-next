import Layout from "@/components/Layout";
import Header from "@/components/Header";
import NavSide from "@/components/NavSide";
import Footer from "@/components/Footer";
import PrivateRoute from "@/utils/wrapper/privateRoute";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getProfile } from "@/utils/https/user";
import { useRouter } from "next/router";
import Loaders from "@/components/Loaders";

function TransferUser() {
  const router = useRouter();
  const controller = useMemo(() => new AbortController(), []);
  const token = useSelector((state) => state.user.token);
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});

  const fetching = async () => {
    setLoading(true);
    const { userId } = router.query;
    try {
      const result = await getProfile(token, userId, controller);
      console.log(result);
      setDataUser(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgUrl =
    "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/" +
    dataUser.image;
  return (
    <Layout title="Transfer Money">
      <Header />
      <section className="w-full md:min-h-[72vh] bg-slate-500/10 flex justify-center py-5 md:py-0">
        <main className="w-full max-w-notebook flex gap-7 px-4 md:px-10% md:py-7">
          <NavSide titlePage="transfer" />

          <div className="flex-1 flex flex-col items-center rounded-3xl bg-white shadow py-10">
            {isLoading ? (
              <Loaders />
            ) : (
              <div className="w-full md:max-w-[400px] px-5 mr-auto">
                <h1 className="font-bold text-lg mb-5">Transfer Money</h1>
                <span className="w-full flex pl-8">
                  <div className="avatar">
                    <div className="w-[74px] mask mask-squircle">
                      <Image
                        src={imgUrl || "/images/users.webp"}
                        alt="display-profile"
                        width={50}
                        height={50}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-5">
                    <h1 className="md:text-lg font-bold">
                      {dataUser.firstName + " " + dataUser.lastName}
                    </h1>
                    <p className="text-grey text-sm md:text-base">
                      {dataUser.noTelp}
                    </p>
                  </div>
                </span>
                <p className="text-grey my-6">
                  Type the amount you want to transfer and then press continue
                  to the next steps.
                </p>
              </div>
            )}
          </div>
        </main>
      </section>
      <Footer />
    </Layout>
  );
}

export default PrivateRoute(TransferUser);
