import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [timee, setTime] = useState(start);
  if (timee === null) {
    setTime(start);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setTime((p) => {
        if (p === end) {
          clearInterval(id);
          return end;
        }

        return p + 1;
      });
    }, 1000);
    return () => {
      //unmounting
      console.log("unmounting");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Timer:{timee}</h1>
    </div>
  );
};
