import "./styles/Timer.css";
import { useState, useRef, useEffect } from "react";
import sound from '../assets/beep.mp3';

function Timer() {
  const initTime = 360000; // 6분
  const initMin = initTime / 60000;

  // 분, 초
  const [time, setTime] = useState(initTime);
  const [min, setMin] = useState(initMin);
  const [sec, setSec] = useState(0);
  const timeId = useRef(null);

  // time 상태가 변경될 때마다 min과 sec를 업데이트
  useEffect(() => {
    setMin(Math.floor(time / 60000));
    setSec(Math.floor((time % 60000) / 1000));

    // 타이머가 0이 되면 beep 호출
    if (time === 0) {
      beep();
    }
  }, [time]);

  // start 함수 - 1초씩 감소
  const handleStart = () => {
    beep();
    if (!timeId.current) {
      timeId.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1000) {
            clearInterval(timeId.current);
            timeId.current = null;
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }
  };

  // stop 함수 - 타이머 멈춤
  const handleStop = () => {
    clearInterval(timeId.current);
    timeId.current = null;
  };

  // 10초 더하기 함수
  const handleAdd10 = () => {
    setTime(prevTime => prevTime + 10000);
  };

  // 10초 빼기 함수
  const handleSub10 = () => {
    setTime(prevTime => Math.max(prevTime - 10000, 0));
  };

  // 6분 리셋 함수
  const handleReset = () => {
    // 타이머 멈춤
    clearInterval(timeId.current);
    timeId.current = null;

    // 시간 초기화
    setTime(initTime);
  };

  //타이머 시작 시 나는 소리
  function beep() {
    const startSound = new Audio(sound);
    startSound.load();
    startSound.play();

  }



  return (
    <>
      <div className="timer">
        <div className="time">
          {min} : {sec.toString().padStart(2, '0')}
        </div>
        <div className="control-btns">
          <button className="start-btn" onClick={handleStart}>START</button>
          <button className="stop-btn" onClick={handleStop}>STOP</button>
          <button className="plus-btn" onClick={handleAdd10}>+</button>
          <button className="minus-btn" onClick={handleSub10}>-</button>
          <button className="reset-btn" onClick={handleReset}>↺</button>
        </div>
      </div>
    </>
  );
}

export default Timer;
