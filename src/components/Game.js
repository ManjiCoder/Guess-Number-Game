import React, { useState } from "react";

function Game() {
  const [userInput, setUserInput] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [chance, setChance] = useState(0);
  // let chance = 0;
  const [score, setScore] = useState(0);
  const [btnText, setBtnText] = useState("Submit");
  const [gameText, setGameText] = useState("");

  const handleOnChange = (e) => {
    if (e.target.value.length <= 3 && e.target.value <= 100) {
      if (Math.sign(e.target.value) === 1 || Math.sign(e.target.value) === 0) {
        setUserInput(e.target.value);
      }
    }
  };

  const checkNumber = (e) => {
    e.preventDefault();
    console.log(randomNumber);
    setChance(1);
    while (true) {
      setChance(chance + 1);
      // console.log(typeof userInput)
      // chance = chance += 1; // this can't done
      if (userInput == randomNumber) {
        setScore(99 - chance);
        console.log(score);
        setBtnText("Game Over");
        setGameText(
          <div className="p-2">
            Congratulations Harry You Have Guess The Number Correctly. <br />
            Your score is {score}
          </div>
        );
        console.log(
          `Congratulations Harry You Have Guess The Number Correctly.`
        );
        console.log("Game Over...");
        console.log("Your score is", score, ".");
        break;
      } else {
        setUserInput("");
        setGameText(
          <div className="p-2">
            Try Again... <br />
            {userInput}{" "}
            {userInput < randomNumber ? "Is Smaller " : "Is Greater "}
            Than Correct Number
          </div>
        );
        console.log(
          "Try Again",
          userInput,
          userInput < randomNumber ? "Is Smaller" : "Is Greater",
          "Than Correct Number",
          chance
        );
        break;
      }
    }
  };
  return (
    <div className="">
      <form className="flex flex-col flex-wrap items-center min-h-screen bg-slate-300 dark:bg-slate-900 pt-7 gap-7">
        <label className="text-xl font-semibold" htmlFor="number">
          Guess the number between 0-100
        </label>
        <input
          className="p-3 bg-slate-100 border-2 border-gray-600 rounded-md text-xl font-bold focus:outline-none focus:bg-white focus:border-gray-900"
          type="number"
          name=""
          id="number"
          placeholder="Enter The Guest Number?"
          onChange={handleOnChange}
          value={userInput}
        />

        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-xl py-3 px-7 rounded-lg  hover:bg-blue-700 focus:bg-blue-800 font-semibold"
          onClick={checkNumber}
        >
          {btnText}
        </button>
        <div className="bg-slate-100 rounded-md text-base font-bold capitalize mx-7 w-72">
          {gameText}
          {}
        </div>
      </form>
    </div>
  );
}

export default Game;
