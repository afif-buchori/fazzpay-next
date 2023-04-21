import { useEffect, useState } from "react";
import Loaders from "../Loaders";
import { getHistories } from "@/utils/https/history";

function DashbHistory({ token, controller }) {
  const [isLoading, setLoading] = useState(true);
  const [dataHistory, setDataHistory] = useState([]);
  const fetching = async () => {
    setLoading(true);
    try {
      const result = await getHistories(token, controller);
      // console.log(result.data.data);
      // const dataOnsuccess = result.data.data.filter(
      //   (item) => item.status === "success"
      // );
      setDataHistory(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(dataHistory);
  return (
    <>
      {isLoading ? (
        <Loaders />
      ) : (
        <section className="w-full flex flex-col gap-8 mt-5">
          {dataHistory.map((item) => (
            <div className="w-full flex gap-4 items-center" key={item.id}>
              <span className="w-14 h-14 border rounded-xl"></span>
              <div className="flex flex-col justify-between">
                <h4 className="font-bold">{item.fullName}</h4>
                <p className="text-[#7A7886]">{item.type}</p>
              </div>
              <p
                className={`${
                  item.type === "accept" || item.type === "topup"
                    ? "text-green-500"
                    : "text-secondary"
                } font-bold ml-auto`}
              >
                {item.type === "accept" || item.type === "topup" ? "+" : "-"}
                {"Rp. "}
                {item.amount.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default DashbHistory;
