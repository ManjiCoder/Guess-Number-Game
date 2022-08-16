import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Name() {
  const [name, setName] = useState("Guest");
  return (
    <form className="flex flex-col flex-wrap justify-center items-center min-h-screen bg-slate-300 dark:bg-slate-900 gap-7">
      <input
        className="p-3 bg-slate-100 border-2 border-gray-900 rounded-md text-xl font-bold capitalize focus:outline-none"
        type="search"
        name=""
        id="name"
        placeholder="What's your name? or enter as guest"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Link to="/game">
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-xl py-3 px-7 rounded-lg  hover:bg-blue-700 focus:bg-blue-800 font-semibold"
          onClick={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </Link>
    </form>
  );
}

export default Name;
