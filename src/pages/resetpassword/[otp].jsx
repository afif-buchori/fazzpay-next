import Layout from "@/components/Layout";
import AuthSide from "@/components/AuthSide";
import { useState } from "react";

function ResetPassword() {
  const [isLoading, setLoading] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");

  return (
    <Layout title="Forgot Password">
      <div className="w-full flex flex-col md:flex-row">
        <AuthSide />
        <section className="flex-1 w-full mb-14 md:mb-0">
          <div className="flex flex-col px-4 md:px-0 md:pl-10 md:pr-10% py-5 md:py-20 w-full max-w-[720px]">
            <h2 className="text-lg md:text-2xl font-bold md:leading-9 mb-4 md:mb-10">
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </h2>
            <p className="text-sm md:text-lg font-semibold text-[#3a3d4270]">
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </p>
            <form action="" className="flex flex-col w-full text-xl">
              <label htmlFor="password" className="label-input mt-7 md:mt-14">
                {" "}
                {showPass ? (
                  <i
                    onClick={() => setShowPass(false)}
                    className="bi bi-eye text-grey hover:text-prime cursor-pointer ml-auto"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPass(true)}
                    className="bi bi-eye-slash text-grey hover:text-prime cursor-pointer"
                  ></i>
                )}
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full"
                />
                <i className="icon-input bi bi-lock text-grey"></i>
              </label>
              <label htmlFor="password" className="label-input mt-7 md:mt-14">
                {" "}
                {showPass ? (
                  <i
                    onClick={() => setShowPass(false)}
                    className="bi bi-eye text-grey hover:text-prime cursor-pointer ml-auto"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPass(true)}
                    className="bi bi-eye-slash text-grey hover:text-prime cursor-pointer"
                  ></i>
                )}
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  value={ConfirmPass}
                  onChange={(event) => setConfirmPass(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full"
                />
                <i className="icon-input bi bi-lock text-grey"></i>
              </label>

              <p className="w-full text-center h-5 my-5 text-secondary font-semibold">
                {isInvalid && msgFetch}
              </p>
              {isLoading ? (
                <button className="btn loading bg-prime border-none text-white my-10">
                  Loading...
                </button>
              ) : (
                <button
                  // onClick={handleSignup}
                  disabled={isInvalid || formEmail === ""}
                  className="btn-prime my-10"
                >
                  Sign Up
                </button>
              )}
            </form>
            <p className="text-center">
              Already have an account? Let’s{" "}
              <span
                // onClick={() => router.push("/login")}
                className="text-prime font-bold cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ResetPassword;
