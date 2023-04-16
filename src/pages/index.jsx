import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();
  const handleNavigate = (to) => {
    router.push(to);
  };
  return (
    <>
      <Head>
        <title>FazzPay</title>
      </Head>
      <header className="w-full fixed flex flex-col items-center text-white z-40 bg-prime/90 shadow-2xl shadow-prime">
        <nav className="w-full max-w-notebook flex items-center justify-between py-4 md:py-12 px-4 md:px-10%">
          <h1 className="text-2xl md:text-3xl font-extrabold">FazzPay</h1>
          <div className="flex gap-8">
            <button
              className="btn md:w-32 border-2 border-white text-white bg-prime hover:bg-white hover:text-prime hover:border-white font-bold"
              onClick={() => handleNavigate("/login")}
            >
              Login
            </button>
            <button
              className="btn md:w-32 border-2 border-white text-prime bg-white hover:bg-prime hover:text-white hover:border-white font-bold"
              onClick={() => handleNavigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <section className="hero-land bg-prime flex flex-col items-center w-full">
        <div className="w-full max-w-notebook px-10% gap-20 flex flex-col text-white">
          <div className="flex flex-col md:flex-row mt-28 md:mt-10 overflow-hidden">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-2xl md:text-6xl font-extrabold md:leading-[93px]">
                Awesomre App For Saving Time.
              </h1>
              <p className="md:text-lg my-10">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button className="btn w-32 border-2 border-white text-prime bg-white hover:bg-prime hover:text-white hover:border-white font-bold">
                Try it Free
              </button>
            </div>
            <div className="flex-1 relative pt-96 md:pt-0">
              <Image
                src="/images/display-phone.png"
                alt="display-phone"
                width="600"
                height="1155"
                className="absolute top-0 left-0 md:relative md:translate-y-[220px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-5 bg-[#bdc2fa50]">
        <div className="w-full max-w-notebook px-4 md:px-10% flex flex-wrap items-center justify-between">
          <Image
            src="/images/logo-microsoft.png"
            alt="logo-partner"
            width="174"
            height="120"
            className="w-[131px] h-[76px]"
          />
          <Image
            src="/images/logo-dropbox.png"
            alt="logo-partner"
            width="174"
            height="120"
            className="w-[174px] h-[120px]"
          />
          <Image
            src="/images/logo-hnm.png"
            alt="logo-partner"
            width="174"
            height="120"
            className="w-[174px] h-[120px]"
          />
          <Image
            src="/images/logo-airbnb.png"
            alt="logo-partner"
            width="174"
            height="120"
            className="w-[174px] h-[120px]"
          />
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="w-full max-w-notebook px-4 md:px-10% flex flex-col my-20 items-center">
          <h2 className="font-bold text-3xl md:text-6xl">
            <span className="text-prime">About</span> the Application.
          </h2>
          <p className="text-sm md:text-lg py-8">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="flex flex-col md:flex-row w-4/5 md:w-full gap-5">
            <div className="flex-1 flex flex-col items-center p-5 rounded-2xl shadow border border-slate-500/10">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-prime/10">
                <i className="bi bi-telephone text-3xl text-prime"></i>
              </span>
              <h3 className="font-bold text-lg md:text-2xl my-5 md:my-9">
                24/7 Support
              </h3>
              <p className="text-xs md:text-lg text-center">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center p-5 rounded-2xl shadow border border-slate-500/10">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-prime/10">
                <i className="bi bi-lock text-3xl text-prime"></i>
              </span>
              <h3 className="font-bold text-lg md:text-2xl my-5 md:my-9">
                Data Privacy
              </h3>
              <p className="text-xs md:text-lg text-center">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center p-5 rounded-2xl shadow border border-slate-500/10">
              <span className="flex justify-center items-center w-16 h-16 rounded-full bg-prime/10">
                <i className="bi bi-download text-3xl text-prime"></i>
              </span>
              <h3 className="font-bold text-lg md:text-2xl my-5 md:my-9">
                Easy Download
              </h3>
              <p className="text-xs md:text-lg text-center">
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center overflow-hidden mt-10 bg-[#bdc2fa50] relative">
        <div className="w-full max-w-notebook px-10% flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex flex-col relative">
            <Image
              src="/images/display-phone2.png"
              alt="display-phone"
              width="600"
              height="1155"
              className="translate-y-[-225px] md:translate-y-[-425px]"
            />

            <Image
              src="/images/display-phone2.png"
              alt="display-phone"
              width="600"
              height="1155"
              className="absolute translate-y-[800px] md:translate-y-[525px]"
            />
          </div>

          <div className="translate-y-[-280px] md:translate-y-0 flex-1 flex flex-col justify-center gap-7">
            <h2 className="font-extrabold text-center md:text-left text-3xl md:text-6xl">
              All The <span className="text-prime">Great</span> FazzPay
              Features.
            </h2>
            <div className="w-full rounded-2xl p-4 bg-white">
              <h3 className="font-bold md:text-xl">
                <span className="text-prime mr-4">1.</span>Small Fee
              </h3>
              <p className="text-xs md:text-lg">
                We only charge 5% of every success transaction done in FazzPay
                app.
              </p>
            </div>

            <div className="w-full rounded-2xl p-4 bg-white">
              <h3 className="font-bold md:text-xl">
                <span className="text-prime mr-4">2.</span>Data Secured
              </h3>
              <p className="text-xs md:text-lg">
                All your data is secured properly in our system and it’s
                encrypted.
              </p>
            </div>

            <div className="w-full rounded-2xl p-4 bg-white">
              <h3 className="font-bold md:text-xl">
                <span className="text-prime mr-4">3.</span>User Friendly
              </h3>
              <p className="text-xs md:text-lg">
                FazzPay come up with modern and sleek design and not
                complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="w-full max-w-notebook px-10% flex flex-col items-center py-10">
          <h2 className="font-extrabold text-center text-3xl md:text-6xl">
            What Users are <span className="text-prime">Saying.</span>
          </h2>
          <p className="text-sm md:text-lg text-center py-8">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="w-full flex gap-10 items-center justify-between relative">
            <button className="btn btn-outline bg-white text-prime border-prime border-2 px-2 py-1 rounded-2xl hover:bg-prime hover:text-white hover:border-prime absolute top-32 -left-4 md:static">
              <i className="bi bi-arrow-left-short text-4xl"></i>
            </button>

            <div className="w-full p-4 md:p-10 flex flex-col gap-5 items-center rounded-2xl shadow border border-slate-500/10">
              <span className="w-32 h-32 border rounded-3xl"></span>
              <h3 className="font-bold md:text-2xl">Alex Hansinburg</h3>
              <p className="md:mb-8">Designer</p>
              <p>
                “This is the most outstanding app that I’ve ever try in my live,
                this app is such an amazing masterpiece and it’s suitable for
                you who is bussy with their bussiness and must transfer money to
                another person aut there. Just try this app and see the power!”
              </p>
            </div>

            <button className="btn btn-outline bg-white text-prime border-prime border-2 px-2 py-1 rounded-2xl hover:bg-prime hover:text-white hover:border-prime absolute top-32 -right-4 md:static">
              <i className="bi bi-arrow-right-short text-4xl"></i>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
