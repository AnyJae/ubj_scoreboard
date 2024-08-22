import { useParams } from "react-router-dom";
import { useState, useRef } from 'react';
import Container from "../components/Container";
import Header from "../components/Header";
import ScoreControl from "../components/ScoreControl";
import "./styles/ScoreBoard.css"
import AdvPen from "../components/AdvPen";
import Timer from "../components/Timer";

function ScoreBoardPage() {
  const { mat } = useParams();

  // Refs for input fields
  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  //States
  // const [player1, setPlayer1] = useState('Player1');
  // const [player2, setPlayer2] = useState('Player2');
  // const [winner, setWinner] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [advance1, setAdvance1] = useState(0);
  const [advance2, setAdvance2] = useState(0);
  const [penalty1, setPenalty1] = useState(0);
  const [penalty2, setPenalty2] = useState(0);

  //Get player name
  // const handleGetPlayer = (e) => {
  //   const player = e.target;
  //   const isFirst = player.classList.contains('player1');
  //   const isSecond = player.classList.contains('player2');
  //   if (isFirst) {
  //     setPlayer1(player.value);
  //   } else if (isSecond) {
  //     setPlayer2(player.value);
  //   } else {
  //     console.log("지정된 선수가 없습니다.");
  //   }
  // }

  //Control score
  const addScore = (num, who) => {
    if (who === 'player1') {
      setScore1(score1 => score1 + num);
    } else if (who === 'player2') {
      setScore2(score2 => score2 + num)
    } else {
      console.log("지정된 선수가 없습니다.");
    }
  }

  const subtractScore = (num, who) => {
    if (who === 'player1') {
      setScore1(score1 => score1 - num);
    } else if (who === 'player2') {
      setScore2(score2 => score2 - num)
    } else {
      console.log("지정된 선수가 없습니다.");
    }
  }

  //Control Advance
  const addAdvance = (num, who) => {
    if (who === 'player1') {
      setAdvance1(advance1 => advance1 + num);
    } else if (who === 'player2') {
      setAdvance2(advance2 => advance2 + num)
    } else {
      console.log("지정된 선수가 없습니다.");
    }
  }

  const subtractAdvance = (num, who) => {
    if (who === 'player1') {
      setAdvance1(advance1 => advance1 - num);
    } else if (who === 'player2') {
      setAdvance2(advance2 => advance2 - num)
    } else {
      console.log("지정된 선수가 없습니다.");
    }
  }

  //Control Penalty
  const addPenalty = (num, who) => {
    if (who === 'player1') {
      setPenalty1(penalty1 => penalty1 + num);
    } else if (who === 'player2') {
      setPenalty2(penalty2 => penalty2 + num)
    } else {
      console.log("지정된 선수가 없습니다.");
    }
  }

  const subtractPenalty = (num, who) => {
    if (who === 'player1') {
      setPenalty1(penalty1 => penalty1 - num);
    } else if (who === 'player2') {
      setPenalty2(penalty2 => penalty2 - num)
    } else {
      console.log("지정된 선수가 없습니다.");
    }
  }

  //Reset score board
  const handleReset = () => {
    if (player1Ref.current) {
      player1Ref.current.value = '';
    }
    if (player2Ref.current) {
      player2Ref.current.value = '';
    }
  setScore1(0);
  setScore2(0);
  setAdvance1(0);
  setAdvance2(0);
  setPenalty1(0);
  setPenalty2(0);
}


return (
  <>
    <Container>
      <Header mat={mat} />
      <div className="contents">
        <div className="box box1">
          <input ref={player1Ref} className="name player1" type="text" placeholder="Player1"></input>
          <div style={{ color: 'blue' }}>
            <Timer />
          </div>
          <input ref={player2Ref} className="name player2" type="text" placeholder="Player2"></input>
        </div>
        <div className="box box2">
          <div className="score-container1">
            <div className="score">{score1}</div>
            <div className="special-score">
              <div className="p-adv">
                <AdvPen type="adv" who='player1' advance={advance1} penalty={penalty1} addAdv={addAdvance} subtractAdv={subtractAdvance} addPen={addPenalty} subtractPen={subtractPenalty} />
              </div>
              <div className="p-pen">
                <AdvPen type="pen" who='player1' advance={advance1} penalty={penalty1} addAdv={addAdvance} subtractAdv={subtractAdvance} addPen={addPenalty} subtractPen={subtractPenalty} />
              </div>
            </div>
          </div>
          <div className="score-container2">
            <div className="special-score">
              <div className="p-adv">
                <AdvPen type="adv" who='player2' advance={advance2} penalty={penalty2} addAdv={addAdvance} subtractAdv={subtractAdvance} addPen={addPenalty} subtractPen={subtractPenalty} />
              </div>
              <div className="p-pen">
                <AdvPen type="pen" who='player2' advance={advance2} penalty={penalty2} addAdv={addAdvance} subtractAdv={subtractAdvance} addPen={addPenalty} subtractPen={subtractPenalty} />
              </div>
            </div>
            <div className="score">{score2}</div>
          </div>

        </div>
        <div className="box box3">
          <ScoreControl who='player1' addScore={addScore} subtractScore={subtractScore} />
          <button className="all-reset-btn" onClick={handleReset}>reset</button>
          <ScoreControl who='player2' addScore={addScore} subtractScore={subtractScore} />
        </div>
      </div>
    </Container>
  </>
)
}

export default ScoreBoardPage;