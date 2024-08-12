import "./styles/ScoreControl.css";

function ScoreControl({ addScore, subtractScore, who }) {

  const handleAddScore = (e) => {
    addScore(Number(e.target.value), who);
  }

  const handleSubtractScore = (e) => {
    subtractScore(Number(e.target.value), who);
  }

  return (
    <>
      <div className="score-control">
        <span className="num two">2</span>
        <button className="control add2" value='2' onClick={handleAddScore}>▲</button>
        <button className="control sub2" value='2' onClick={handleSubtractScore}>▼</button>
        <span className="num three">3</span>
        <button className="control add3" value='3' onClick={handleAddScore}>▲</button>
        <button className="control sub3" value='3' onClick={handleSubtractScore}>▼</button>
        <span className="num four">4</span>
        <button className="control add4" value='4' onClick={handleAddScore}>▲</button>
        <button className="control sub4" value='4' onClick={handleSubtractScore}>▼</button>
      </div>
    </>
  );
}

export default ScoreControl;