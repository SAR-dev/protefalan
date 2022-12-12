import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getLocalAccessToken } from "../helpers";

const UnAuthLayout = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    console.log(getLocalAccessToken());
    if (getLocalAccessToken()) {
      history.goBack();
    }
  }, []);

  return <>{children}</>;
};

export default UnAuthLayout;
