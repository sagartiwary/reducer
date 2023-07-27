import React, { useReducer, useState } from "react";
import { ShowInForm } from "./ShowInForm";

const initState = {
  name: "",
  gender: "",
  role: "",
  marital: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NAME":
      return { ...state, name: payload };
    case "ROLE":
      return { ...state, role: payload };
    case "GENDER":
      return { ...state, gender: payload };
    case "MARRIAGE":
      return { ...state, marital: !state.marital };
    case "RESET":
      return payload;
    default:
      return state;
  }
};
export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [submittedData, setSubmittedData] = useState([]);
  const { name, gender, role, marital } = state;
  //  console.log(state)
  const handleName = (e) => {
    return dispatch({ type: "NAME", payload: e.target.value });
  };
  const handleReset = () => {
    return dispatch({ type: "RESET", payload: initState });
  };
  const handleRole = (e) => {
    return dispatch({ type: "ROLE", payload: e.target.value });
  };
  const handleGender = (e) => {
    return dispatch({ type: "GENDER", payload: e.target.value });
  };

  const handleMarriage = (e) => {
    return dispatch({ type: "MARRIAGE", payload: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6 mb-3">User Form</h1>
      <div className="max-w-md border border-gray-600 mx-auto shadow-lg rounded">
        <form
          className="flex justify-center items-center flex-col mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-[60%] border border-gray-400 bg-white rounded px-3 py-2 mb-1 mt-2"
            placeholder="Name"
            onChange={handleName}
            value={name}
          />

          <select
            className="w-[60%] border border-gray-400 bg-white hover:bg-white text-lg px-3 py-2 mb-2 mt-1 rounded"
            value={role}
            onChange={handleRole}
          >
            <option value="">Role</option>
            <option value="frontend">FrontEnd Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">FullStack Developer</option>
          </select>

          <select
            className="rounded w-[60%] border border-gray-400 bg-white hover:bg-white text-lg px-3 py-2"
            value={gender}
            onChange={handleGender}
          >
            <option value="">Gender</option>
            <option value="male"> Male</option>
            <option value="female"> Female</option>
            <option value="not"> Prefer Not to Say</option>
          </select>
          <div>
            <input
              type="checkbox"
              onChange={handleMarriage}
              checked={marital}
            />{" "}
            <span>Married</span>
          </div>
          <div className="div">
            <button
              className="border border-gray-400 px-3 py-2 rounded bg-blue-600 text-white uppercase font-serif mt-2 mb-3 shadow-md hover:shadow-lg hover:bg-blue-800 transition duration-150 ease-in-out"
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={handleReset}
              className="border border-gray-400 px-6 bg-red-600 text-white  py-2 ml-5 uppercase font-serif"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {submittedData.length == 0 ? (
        <h2 className="text-center text-2xl uppercase font-bold mt-6 border-black pb-3 border-b">
          no user found
        </h2>
      ) : (
        <ShowInForm data={submittedData}/>
      )}
    </>
  );
};
