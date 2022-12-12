import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getLocalAccessToken } from "../helpers";

const AuthLayout = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    if (!getLocalAccessToken()) {
      history.push("/signin");
    }
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
