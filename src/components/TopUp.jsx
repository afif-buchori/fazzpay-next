import { useState } from "react";

function TopUp({ isOpen, onClose }) {
  const [valueTopup, setValueTopup] = useState("");

  const onChangeTopup = (event) => {
    const { value } = event.target;
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setValueTopup(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {isOpen && (
        <section className="w-screen h-screen fixed flex justify-center items-center bg-slate-900/90 z-50">
          <form className="w-4/5 md:w-[560px] p-5 md:p-10 flex flex-col bg-white rounded-2xl">
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold text-2xl">Top Up</h1>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-circle border-2 border-secondary text-secondary bg-white hover:bg-secondary hover:border-secondary hover:text-white"
              >
                <i className="bi bi-x text-4xl"></i>
              </button>
            </div>
            <p className="text-grey text-lg my-5">
              Enter the amount of money, and click submit
            </p>
            <input
              type="text"
              name="topup"
              value={valueTopup.toLocaleString("id-ID")}
              onChange={onChangeTopup}
              className="border-2 rounded-2xl px-4 text-center py-5 text-2xl font-bold focus:outline-prime"
            />
            <div className="w-full flex mt-10 gap-10">
              <button
                type="reset"
                onClick={() => setValueTopup("")}
                className="btn-outline-prime flex-1"
              >
                reset
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={valueTopup === "" || valueTopup == 0}
                className="btn-prime flex-1 ml-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default TopUp;
