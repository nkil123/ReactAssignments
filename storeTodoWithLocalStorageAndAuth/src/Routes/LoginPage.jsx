import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginFail, loginSucess } from "../Components/features/auth/action";
import { Login } from "../Components/Login";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.isAuth);

  const handleLogin = (email, password) => {
    if (email === "nilesh" && password == "nk123") {
      const action = loginSucess("fakeToken");
      dispatch(action);
    } else {
      const action = loginFail("wrong Credentials");
      dispatch(action);
    }
  };
  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};
