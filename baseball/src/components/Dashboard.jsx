import React, { useState } from 'react';
import Display from './Display';
import '../App.css';




export const addBall = currentBalls => {
  if (currentBalls > 2) {
    return 0;
  } else return currentBalls + 1;
};
export const addStrike = currentStrikes => {
  if (currentStrikes >= 2) {
    return 0;
  } else return currentStrikes + 1;
};
export const addFoul = currentStrikes => {
  if (currentStrikes === 2) {
    return currentStrikes;
  } else return currentStrikes + 1;
};
export const addHit = currentHits => {
   return currentHits + 1;
}

function Dashboard() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hits, setHits] = useState(0)

  return (
    <>
        <div>
            <Display balls={balls} strikes={strikes} />
        </div>
        <div classnme='buttonDiv'>
            <button onClick={() => setBalls(addBall(balls))}>Ball</button>
            <button onClick={() => setStrikes(addStrike(strikes))}>Strike</button>
            <button onClick={() => setStrikes(addFoul(strikes))}>Foul</button>
            <button onClick={() => setHits(addHit(hits))}>Hit</button>
        </div>
    </>
  )
}
export default Dashboard;