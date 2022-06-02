import React from "react";
import img1 from "./group.png"
import "./GameDetail.css"


const GameDetail = () => {
    return (
      <div className="gddetail">
        <div className="row">
          <div className="col">
            <img src={img1} alt=""/>
            <a href="/gamesuit">
              <button className="gdbtnpict" size="lg"><h4> Play Game </h4></button>
              </a>
          </div>
          <div className="col">
            <ul>
              <h1>LET'S PLAY</h1>
              <h2>Rock-Paper-Scissors </h2>
              <li>
              <a href="/inputscore">
                <button className="gdbtn" color="info" size="lg" href="/leaderboard">Input Score</button>
                </a>
                </li>
              <li>
              <a href="/leaderboard">
              <button className="gdbtn" color="info" size="lg" href="/leaderboard">Leaderboard</button>
            </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default GameDetail;