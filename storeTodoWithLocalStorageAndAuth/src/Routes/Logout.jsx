import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../Components/features/auth/action";

export const Logout = () => {
  const dispatch = useDispatch();
  const action = logout();
  dispatch(action);

  return (
    <>
      <Navigate to={"/login"}></Navigate>
    </>
  );
};
