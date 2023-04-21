import Loaders from "@/components/Loaders";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PublicRoute(WrappedComponent) {
  const Auth = (props) => {
    const isToken = useSelector((state) => state.user.token);
    const router = useRouter();

    useEffect(() => {
      if (isToken) {
        router.push("/dashboard");
      }
    }, [isToken, router]);

    if (!isToken) {
      return <WrappedComponent {...props} />;
    }
    return <Loaders />;
  };
  return Auth;
}

export default PublicRoute;
