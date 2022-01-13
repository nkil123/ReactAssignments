import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCounter } from "../../store/action";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);

  //   console.log(counter);
  const dispatch = useDispatch();
  const handleCounter = () => {
    dispatch(addCounter(-2));
  };

  return (
    <>
      <h3>Counter:{counter}</h3>
      <button onClick={handleCounter}>Add Counter</button>
    </>
  );
};
