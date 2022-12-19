import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { getLocalAccessToken } from "../helpers";

const AuthLayout = ({ children }) => {
  const history = useHistory();

  useLayoutEffect(() => {
    if (!getLocalAccessToken()) {
      history.push("/signin");
    }
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
