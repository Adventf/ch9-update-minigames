import React, { useState } from "react";
//import Navbar from "../Navbar";
import { Title } from "./Title";
import { Round } from "./Round";
import { Playground } from "./Playground";
import { Profile } from "./Profile";
import { User } from "./User";
import { Choice } from "./Choice";
import { Computer } from "./Computer";
import { Score } from "./Score";
import { Message } from "./Message";
import { Reset } from "./Reset";

import { settings } from "./configs/game";

import rock from "./assets/batu.png";
import paper from "./assets/kertas.png";
import scissors from "./assets/gunting.png";
import trophy from "./assets/trophy.png";

import "./styles.css";

export default function GameDetailPages() {
  let [game, setGame] = useState({
    userSelection: "",
    pcSelection: "",
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: "",
  });

  const reset = () => {
    setGame({
      ...game,
      userSelection: "",
      pcSelection: "",
      round: 0,
      userScore: 0,
      pcScore: 0,
      message: "",
    });
  };

  const { winMessage, tieMessage, lostMessage, winTarget } = settings;
  const { pcScore, userScore } = game;

  const play = (e) => {
    if (pcScore < winTarget) {
      const userSelection = e.target.parentNode.getAttribute("value");
      const pcSelection = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];

      userSelection === pcSelection
        ? setGame({
            ...(game.message = tieMessage),
          })
        : (userSelection === "Rock" && pcSelection === "Scissors") || (userSelection === "Paper" && pcSelection === "Rock") || (userSelection === "Scissors" && pcSelection === "Paper")
        ? setGame({
            ...(game.userScore += 1),
            ...(game.message = winMessage),
          })
        : setGame({
            ...(game.pcScore += 1),
            ...(game.message = lostMessage),
          });

      setGame({
        ...game,
        round: (game.round += 1),
        userSelection,
        pcSelection,
      });
    }
  };

  return (
    <div id="suit" className="GameDetailPages">
      
      <Title />
      <Round {...game} />
      <Playground>
        <Profile>
          <User {...game} trophyIcon={trophy}>
            <Choice {...game} value="Rock" onClick={play} choiceIcon={rock} />
            <Choice {...game} value="Paper" onClick={play} choiceIcon={paper} />
            <Choice {...game} value="Scissors" onClick={play} choiceIcon={scissors} />
          </User>
          <Score score={userScore} />
        </Profile>
        <Message {...game} />
        <Profile>
          <Computer {...game} rockIcon={rock} paperIcon={paper} scissorsIcon={scissors} trophyIcon={trophy} />
          <Score score={pcScore} />
        </Profile>
      </Playground>
      <Reset {...game} onClick={reset} />
    </div>
  );
}


// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./gamesuit.css";

// membuat representasi class computer
// class Computer {
//   constructor(stylePilihan) {
//     this.stylePilihan = stylePilihan;
//   }
//   // untuk menentukan langkah komputer secara random
//   acakComputer() {
//     const randomMove = Math.random();
//     if (randomMove < 0.4) {
//       this.ubahPilihanComputer('batu');
//       return 'batu';
//     } else if (randomMove >= 0.4 && randomMove < 0.5) {
//       this.ubahPilihanComputer('kertas');
//       return 'kertas';
//     } else {
//       this.ubahPilihanComputer('gunting');
//       return 'gunting';
//     }
//   }

//   ubahPilihanComputer(compu) {
//     if (compu === 'gunting') {
//       document.getElementsByClassName('gunting computer')[0].style = this.stylePilihan;
//     }
//     if (compu === 'kertas') {
//       document.getElementsByClassName('kertas computer')[0].style = this.stylePilihan;
//     }
//     if (compu === 'batu') {
//       document.getElementsByClassName('batu computer')[0].style = this.stylePilihan;
//     }
//   }
// }

// // Membuat representasi class dari Game,
// class Game {
//   #GAME_STATE;

//   constructor() {
//     this.boxShadow = 'box-shadow: 0px 0px 10px 10px rgb(255, 217, 0);background-color: #c4c4c4;';
//     this.GAME_STATE = 'START';
//     this.computer = new Computer(this.boxShadow);
//     this.langkahPlayer = document.getElementsByClassName('player');
//     this.resetButton = document.getElementsByClassName('reload')[0];
//   }

//   //          **                   *      *
//   hasilComputerPlayer(player, compu) {
//     if (player === compu) {
//       return 'DRAW';
//     } else if (player === 'batu') {
//       return compu === 'kertas' ? 'COM WIN' : 'PLAYER WIN';
//     } else if (player === 'kertas') {
//       return compu === 'batu' ? 'PLAYER WIN' : 'COM WIN';
//     } else {
//       return compu === 'kertas' ? 'PLAYER WIN' : 'COM WIN';
//     }
//   }

//   // memulai game,
//   // pasang listener pada tiap elemen
//   start() {
//     for (let start = 0; start < this.langkahPlayer.length; start++) {
//       const playerMoves = this.langkahPlayer[start];
//       playerMoves.addEventListener('click', (e) => {
//         if (this.GAME_STATE === 'START') {
//           const player = e.target.closest('img').dataset.value;
//           const compu = this.computer.acakComputer();
//           const kalahMenang = this.hasilComputerPlayer(player, compu);
//           this.gameWin(kalahMenang, compu, e);
//           this.GAME_STATE = 'FINISH';
//         } else {
//           alert('Click Refresh Dahulu');
//         }
//         this.resetButton.addEventListener('click', () => {
//           this.resetGame();
//         });
//       });
//     }
//   }

//   // mengubah UI saat menang
//   gameWin(kalahMenang, compu, e) {
//     e.style = this.boxShadow;
//     // tentukan langkah kompter
//     document.getElementsByClassName('playerWin')[0].innerHTML = kalahMenang;
//     document.getElementsByClassName('playerWin')[0].style.display = 'block';
//     document.getElementsByClassName('vs')[0].style.display = 'none';
//   }

//   resetGame() {
//     document.getElementsByClassName('batu computer')[0].style = '';
//     document.getElementsByClassName('kertas computer')[0].style = '';
//     document.getElementsByClassName('gunting computer')[0].style = '';
//     document.getElementsByClassName('playerWin')[0].style.display = 'none';
//     document.getElementsByClassName('vs')[0].style.display = 'block';
//     this.GAME_STATE = 'START';
//   }
// }

// const game = new Game();
// game.start();


// const GameSuit = () => {

//   const [userChoice, setUserChoice] = useState(null)
//   const [computerChoice, setComputerChoice] = useState(null)
//   const [result, setResult] = useState(null)
//   const choices = ['rock', 'paper', 'scissors']

//   const handleClick = (value) => {
//     setUserChoice(value)
//     generateComputerChoice()
    
//   }

//   const generateComputerChoice = () => {
//     const randomChoice = choices[Math.floor(Math.random()*choices.length)];
//     setComputerChoice(randomChoice);
    
//   }

//   useEffect(()=>{
//     checkResult()
//   }, [computerChoice, userChoice])

//   const checkResult = () => {
//     switch(userChoice+computerChoice) {
//       case 'scissorspaper' :
//       case 'rockscissors' :
//       case 'paperrock' :
//         setResult('Player Menang')
//         break
//       case 'paperscissors' :
//       case 'scissorsrock' :
//       case 'rockpaper' :
//         setResult('Komputer Menang')
//         break
//       case 'rockrock' :
//       case 'paperpaper' :
//       case 'scissorsscissors' :
//         setResult('Draw')  
//         break  
//       default : 
//         setResult('')
//     }
//   }

//     return (
//       <div>
//         <h1>user choice is: {userChoice}</h1>
//         <h1>computer choice is: {computerChoice}</h1>
//         {choices.map((choice, index)=>
//         <button key={index} onClick={()=>{handleClick(choice)}}>{choice}</button>
//         )}
//         <h1>result : {result}</h1>
//       </div>



    //   <div>
    //     <div>
    //      <div className="container-fluid">
    //   <div className="row backgroundBrown">
    //     <div className="col-12 mb-5">
    //       <img src="./images/_.png" className="ms-5 mt-3 img-fluid" alt="" />
    //       <img src="./images/logo.png" className="ms-5 mt-3 img-fluid" alt="" srcSet="" />
    //       <h1 className="d-inline-block text-warning ms-3 align-middle">ROCK PAPPER SCISSORS</h1>
    //     </div>
    //   </div>
    // </div>
    
    // <section id="konten">
    //   <div className="container-fluid kontenbrown">
    //     <div className="row mb-5">
    //       <div className="col-4 text-end">
    //         <p className="fs-1"><strong>PLAYER 1</strong></p>
    //       </div>
    //       <div className="col-4"></div>
    //       <div className="col-4 text-start">
    //         <p className="fs-1"><strong>COM</strong></p>
    //       </div>
    //     </div>
      
    //     <div className="row mb-5">
    //       <div className="col-4 text-end">
    //         <img src="./images/batu.png" class="batu player img-fluid" data-value="batu" alt="Batu" />
    //       </div>
    //       <div className="col-4"></div>
    //       <div className="col-4 text-start">
    //         <img src="./images/batu.png" class="batu computer img-fluid" alt="Batu" />
    //       </div>
    //     </div>
        
    //     <div className="row mb-5">
    //       <div className="col-4 text-end">
    //         <img src="./images/kertas.png" class="kertas player img-fluid" data-value="kertas" alt="kertas" srcset="" />
    //       </div>
    //       <div className="col-4 text-center text-danger">
    //         <p className="vs"><strong>V S</strong></p>
    //         <p className="playerWin">PLAYER<br />WIN</p>
    //       </div>
    //       <div className="col-4 text-start">
    //         <img src="./images/kertas.png" class="kertas computer img-fluid" alt="kertas" srcset="" />
    //       </div>
    //     </div>
        
    //     <div className="row mb-5">
    //       <div className="col-4 text-end">
    //         <img src="./images/gunting.png" class="gunting player img-fluid" data-value="gunting" alt="Gunting" srcset="" />
    //       </div>
    //       <div className="col-4"></div>
    //       <div className="col-4 text-start">
    //         <img src="./images/gunting.png" class="gunting computer img-fluid" alt="Gunting" srcset="" />
    //       </div>
    //     </div>

        
    //     <div className="row">
    //       <div className="col-12 text-center">
    //         <img src="./images/refresh.png" class="reload" alt="Reload" srcset="" />
    //       </div>
    //     </div>
       
    //   </div>
    // </section>
    //   </div>
    //   </div>
//     );
// }

// export default GameSuit;