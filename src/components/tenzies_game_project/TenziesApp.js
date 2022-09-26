import React, { useState, useEffect } from "react";
import "./TenziesApp.css";
import Dice from "./tenzies_game_components/Dice";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

function TenziesApp() {
  const [gameStatusInformation, setGameStatusInformation] = useState("");
  const [dice, setDice] = useState(allNewDice());
  const diceElements = dice.map((die) => (
    <Dice
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={holdDice}
      id={die.id}
    />
  ));

  function generateNewDieHelper() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const lengthOfArray = 10;
    const newDice = [];
    for (let i = 0; i < lengthOfArray; i++) {
      newDice.push(generateNewDieHelper());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDieHelper();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice);
      setGameStatusInformation("");
    }
  }

  function holdDice(id) {
    console.log(id);
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  //CHECK IF DICE HAS BEEN WON
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    //check if all die is held
    const allHeld = dice.every((die) => die.isHeld === true);

    //check if all values are the same
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld === true && allSameValue === true) {
      setTenzies(true);
      setGameStatusInformation("CONGRATULATIONS, YOU WON!!");
      console.log("You Won!!!");
    }
  }, [dice, tenzies]);

  return (
    <div className='d-flex justify-content-center mt-5 p-5 bg-black'>
      <div className='tenzies-container'>
        {tenzies && <ReactConfetti />}
        <div className='text-center'>
          <h1 className='h1'>Tenzies</h1>
          <p className='lead'>
            Roll untill all dice are the same. Click each die to freeze it at
            its current value between rolls
          </p>
        </div>
        <div className='tenzies-dice-container'>{diceElements}</div>
        <div className='text-info'>
          <p>{gameStatusInformation}</p>
        </div>
        <div>
          <button onClick={rollDice} className='btn btn-lg btn-dark'>
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TenziesApp;

/* TODO 
Features to add to this game
1. CSS: Put real dits on the dice
2. Track the number of roll
3. Track the time it took to win
4. Save your best time to localStorage
*/
