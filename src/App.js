import React, { useEffect, useMemo, useState } from "react";
import "./app.css";
import Soal from "./components/Soal";
import Timer from "./components/Timer";
import Start from "./components/Start";

const App = () => {
  const [userName,setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("Rp 0");
  const [navOpen, setNavOpen] = useState(false)
  const data = [
    {
      id: 1,
      pertanyaan: "Siapa anak pertama dari dedi rifty?",
      jawabans: [
        {
          text: "Nazra",
          correct: true,
        },
        {
          text: "Miska",
          correct: false,
        },
        {
          text: "Nina",
          correct: false,
        },
        {
          text: "Sinta",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      pertanyaan: "Apa nama panggilan dari anak nya dedi rifty",
      jawabans: [
        {
          text: "naz",
          correct: false,
        },
        {
          text: "najra",
          correct: false,
        },
        {
          text: "rara",
          correct: true,
        },
        {
          text: "nay",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rp. 50.000" },
        { id: 2, amount: "Rp. 100.000" },
        { id: 3, amount: "Rp. 500.000" },
        { id: 4, amount: "Rp. 1.000.000" },
        { id: 5, amount: "Rp. 5.000.000" },
        { id: 6, amount: "Rp. 15.000.000" },
        { id: 7, amount: "Rp. 30.000.000" },
        { id: 8, amount: "Rp. 100.000.000" },
        { id: 9, amount: "Rp. 500.000.000" },
        { id: 10, amount: "Rp. 750.000.000" },
        { id: 11, amount: "Rp. 1.0000.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  });
  return (
    <div className="app">
      {userName ? (
        <>
        <div className="main">
        {stop ? (
          <h1 className="endText">Anda Mendapatkan: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
              <Soal
                data={data}
                questionNumber={questionNumber}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                setNavOpen={setNavOpen}
                navOpen={navOpen}
              />
            </div>
          </>
        )}
      </div>
      <div className={"pyramid " + (navOpen && 'active')}>
        <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          <div className={"menuListMoney " + (navOpen && 'active')}>
        <ul className="moneyList">
          {moneyPyramid.map((m, indek) => (
            <li
              key={indek}
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
        </>
      ) : <Start setUserName={setUserName}/>}
      
    </div>
    
  );
};

export default App;
