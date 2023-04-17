import React from "react";
import Head from "next/head";
import PrivateRoute from "@/utils/wrapper/privateRoute";

function LayoutPrivate({ title, children }) {
  return (
    <>
      <Head>
        <title>FazzPay | {title}</title>
      </Head>
      <PrivateRoute>{children}</PrivateRoute>
    </>
  );
}

export default LayoutPrivate;
