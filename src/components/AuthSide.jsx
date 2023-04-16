import React from "react";
import Image from "next/image";

function AuthSide() {
  return (
    <section className="hero-auth flex-1 w-full flex flex-col bg-prime md:min-h-screen text-white overflow-x-hidden">
      <div className="max-w-[720px] px-4 md:px-0 md:pl-10% py-5 md:py-20 w-full h-full flex flex-col self-end">
        <h1 className="text-2xl md:text-3xl font-extrabold">FazzPay</h1>
        <div className="relative w-full h-20 flex">
          <Image
            src="/images/display-phone2.png"
            alt="display-phone"
            width="278"
            height="536"
            className="absolute left-[40px] md:left-[100px] top-[-290px] md:top-0 scale-50 md:scale-90 -rotate-6"
          />
          <Image
            src="/images/display-phone.png"
            alt="display-phone"
            width="278"
            height="536"
            className="absolute right-[-60px] md:right-[100px] top-[-280px] md:top-0 scale-50 md:scale-90 rotate-6"
          />
        </div>
        <div className="mt-auto md:pr-20">
          <h2 className="font-bold text-lg md:text-2xl my-8">
            App that Covering Banking Needs.
          </h2>
          <p className="text-sm md:text-lg">
            FazzPay is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in FazzPay everyday with worldwide
            users coverage.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AuthSide;
