import { PropsWithChildren, createContext, useEffect, useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import axios from "../api/axios";
import { useCookies } from "react-cookie";

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState({});
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  useEffect(() => {
    if (!cookies.access_token || cookies.access_token == "") {
      const fetchToken = async () => {
        const response = await axios.post(
          "api/auth/login",
          {},
          {
            headers: {
              "x-ms-principal": "superadmin",
              "x-ms-credential": "superadmin",
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setCookie("access_token", response.data.token);
        setCookie("refresh_token", response.data.refreshToken);
        setAuth({
          access_token: response.data.token,
          refresh_token: response.data.refreshToken,
        });
      };
      fetchToken();
    } else {
      setAuth({
        access_token: cookies.access_token,
        refresh_token: cookies.refresh_token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
