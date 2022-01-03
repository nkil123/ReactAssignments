import "./card.css";

export const Card = ({ title, time, id, showBelow }) => {
  const showDes = () => {
    console.log("inside", id);
    showBelow(id);
  };

  return (
    <>
      <div onClick={showDes} className="cardDiv">
        <h3>Title:{title}</h3>
        <p>Cooking Time:{`${time} hour`}</p>
      </div>
    </>
  );
};
