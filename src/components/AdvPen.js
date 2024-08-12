import "./styles/AdvPen.css"

function AdvPen({ type, who, advance, penalty, addAdv, subtractAdv, addPen, subtractPen }) {

  const numClassnames = `${type}`

  let score = 0;
  if (type === 'adv') {
    score = advance;
  } else if (type === 'pen') {
    score = penalty;
  }


  const handleAdd = (e) => {
    if (type === 'adv') {
      addAdv(Number(e.target.value), who);
    } else {
      addPen(Number(e.target.value), who);
    }
  }

  const handleSubtract = (e) => {
    if (type === 'adv') {
      subtractAdv(Number(e.target.value), who);
    } else {
      subtractPen(Number(e.target.value), who);
    }
  }

  return (
    <>
      <div>
        <div className='adv-pen'>
          <span className={numClassnames}>{score}</span>
          <button className="control add" value='1' onClick={handleAdd}>▲</button>
          <button className="control sub" value='1' onClick={handleSubtract}>▼</button>
        </div>
      </div>
    </>
  );
}

export default AdvPen;