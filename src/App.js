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
      pertanyaan: "Berapa Jumlah Cucu Aki dan Uwan?",
      jawabans: [
        {
          text: "20",
          correct: false,
        },
        {
          text: "7",
          correct: false,
        },
        {
          text: "11",
          correct: true,
        },
        {
          text: "12",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      pertanyaan: 'Tanggal berapa pernikahan kak along rifa dan bang long arifin?',
      jawabans: [
        {
          text: "20 Desember 2008",
          correct: false,
        },
        {
          text: "1 maret 2008",
          correct: true,
        },
        {
          text: "2 september 2019",
          correct: false,
        },
        {
          text: "03 februari 2010",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      pertanyaan: 'Siapa cucu ke tiga dari aki erlian dan uwan mulina?',
      jawabans: [
        {
          text: "Nazra",
          correct: false,
        },
        {
          text: "Messi",
          correct: true,
        },
        {
          text: "Saza",
          correct: false,
        },
        {
          text: "Aiza",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      pertanyaan: 'Tanggal Berapakah Ayah dilahirkan?',
      jawabans: [
        {
          text: "19 November 1999",
          correct: false,
        },
        {
          text: "01 Januari 1968",
          correct: true,
        },
        {
          text: "19 Maret 1968",
          correct: false,
        },
        {
          text: "17 September 1957",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      pertanyaan: 'Hari apakah kak ngah Mela lahir kedunia?',
      jawabans: [
        {
          text: "Kamis",
          correct: false,
        },
        {
          text: "Jum'at",
          correct: true,
        },
        {
          text: "Sabtu",
          correct: false,
        },
        {
          text: "Ahad",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      pertanyaan: 'Hal apa yang tidak disukai mamak?',
      jawabans: [
        {
          text: "Dapat uang 1 Milyar",
          correct: false,
        },
        {
          text: "Ketemu cucunya",
          correct: true,
        },
        {
          text: "makan bubur diaduk",
          correct: false,
        },
        {
          text: "Berlambat-lambat ria",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      pertanyaan: 'Berapa Harga Es batu yang dijual ayah ke bang feri?',
      jawabans: [
        {
          text: "2500",
          correct: false,
        },
        {
          text: "1500",
          correct: true,
        },
        {
          text: "2000",
          correct: false,
        },
        {
          text: "1000",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      pertanyaan: 'Apa ledekan panggilan nining waktu kecil?',
      jawabans: [
        {
          text: "si china",
          correct: false,
        },
        {
          text: "Anak Pungut",
          correct: false,
        },
        {
          text: "Nungging",
          correct: true,
        },
        {
          text: "sipit",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      pertanyaan: 'Apa pesan yang diberikan ayah kepada anak-anaknya?',
      jawabans: [
        {
          text: "Taatlah kepada suami, selama dia taat kepada Allah swt",
          correct: true,
        },
        {
          text: "Sopan santunlah ketika kamu berada",
          correct: false,
        },
        {
          text: "Jadilah anak yang sukses dan berguna",
          correct: false,
        },
        {
          text: "Berfikirlah sebelum bertindak",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      pertanyaan: 'Siapakah Menantu yang paling tampan?',
      jawabans: [
        {
          text: "Ahmad Arifin",
          correct: false,
        },
        {
          text: "Abdul Basit",
          correct: false,
        },
        {
          text: "Yusuf",
          correct: false,
        },
        {
          text: "Abdul Malik",
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
        { id: 6, amount: "Rp. 5.000.000" },
        { id: 7, amount: "Rp. 15.000.000" },
        { id: 8, amount: "Rp. 30.000.000" },
        { id: 9, amount: "Rp. 100.000.000" },
        { id: 10, amount: "Rp. 500.000.000" },
        { id: 11, amount: "Rp. 750.000.000" },
        { id: 12, amount: "Rp. 1.0000.000.000" },
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
