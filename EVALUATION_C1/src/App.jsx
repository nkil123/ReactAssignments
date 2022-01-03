import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { Button } from "./styled/comp";

function App() {
  const [cards, setCards] = useState([]);
  const [d, setDetails] = useState(null);

  useEffect(() => {
    cardData();
  }, []);

  console.log(cards);
  const cardData = () => {
    fetch("http://localhost:3005/data")
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setCards(r);
      });
  };

  const showBelow = (id) => {
    fetch(`http://localhost:3005/data/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setDetails(r);
      });
  };

  const sortByAsc = () => {
    fetch(`http://localhost:3005/data?_sort=time&_order=asc`)
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setCards(r);
      });
  };

  const sortByDsc = () => {
    fetch(`http://localhost:3005/data?_sort=time&_order=desc`)
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setCards(r);
      });
  };

  return (
    <div className="App">
      <div className="form">
        <Form cardData={cardData} />
      </div>
      <div className="scrollDiv">
        <Button onClick={sortByAsc}>Sort Accending</Button>
        <Button onClick={sortByDsc}>Sort Descending</Button>
        {cards.map((e) => {
          return (
            <Card
              title={e.title}
              time={e.time}
              id={e.id}
              showBelow={showBelow}
            />
          );
        })}
      </div>
      {d === null ? (
        <></>
      ) : (
        <div className="below">
          <span>
            <p>
              <b>Title:{`   ${d.title}`}</b>
            </p>
            <p>
              <b>Time To Cook:{`   ${d.time} hour`}</b>
            </p>
            <p>
              <b>Instructions:{`   ${d.instr}`}</b>
            </p>
            <p>
              <b>Time To Cook:{`   ${d.time}`}</b>
            </p>

            <p>
              <b>Ingredients:{`   ${d.ingrd}`}</b>
            </p>
          </span>
          <span>
            <img src={`${d.image}`} alt="image" />
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
