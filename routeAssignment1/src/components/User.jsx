import { Link } from "react-router-dom";

export const User = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((e, i) => {
        return (
          <Link to={`/users/${e}`} style={{ display: "block" }}>
            User:{e}
          </Link>
        );
      })}
    </>
  );
};
