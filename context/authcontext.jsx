import { useRouter } from "next/router";
import { createContext, useState, useContext, useEffect } from "react";
const Context = createContext({});

const AuthProvider = (props) => {
  const navigate = useRouter();
  const [token, setToken] = useState("");

  const onLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const onLogin = ({ token: t }) => {
    console.log(t, "yuu");

    setToken(t);
    localStorage.setItem("token", t);
    navigate("/letsqa/dashboard");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Context.Provider value={{ token, onLogin, onLogout }}>
        {props.children}
      </Context.Provider>
    </>
  );
};

const useAuth = () => {
  const val = useContext(Context);
  return val;
};

export default AuthProvider;
export { useAuth };
