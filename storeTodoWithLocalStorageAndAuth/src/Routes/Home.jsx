import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Todo } from "../Components/Todo/Todo";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return <>{!isAuth ? <Navigate to={"/login"}></Navigate> : <Todo />}</>;
};
