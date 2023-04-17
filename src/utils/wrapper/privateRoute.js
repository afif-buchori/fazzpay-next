import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const router = useRouter();
  const isToken = useSelector((state) => state.user.token);

  useEffect(() => {
    if (typeof window !== "undefined" && !isToken) {
      router.push("/login");
    }
  }, [isToken, router]);

  if (!isToken) return null;

  return children;
}

export default PrivateRoute;
