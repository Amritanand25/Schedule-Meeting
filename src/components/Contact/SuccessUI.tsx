import React from "react";
import { MdCelebration } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useStoreHooks";
import { reSetCalender } from "../../store/slices/calenderSlice";
import { reSetTime } from "../../store/slices/cardSlice";

const SuccessUI = () => {
  const dispatch = useAppDispatch();
  const resetHandler = () => {
    dispatch(reSetCalender());
    dispatch(reSetTime());
  }
  return (
    <div>
      <h3 className='text-blue text-6xl flex justify-center font-extrabold mb-4'>
        <MdCelebration />
      </h3>
      <h3 className='text-2xl text-center text-blue font-bold mb-4'>Thank You!</h3>
      <p className='text-center font-medium text-md text-gray-dark'>
        We look forward to speaking with you soon and getting you the right
        coverage.
      </p>
      <Link to="/appointment">
        <button
          type="submit"
          className="text-white mt-6 w-full text-center text-md font-medium bg-blue hover:bg-opacity-80 px-6 py-3 rounded-md"
          onClick={resetHandler}
        >
          close
        </button>
      </Link>
    </div>
  );
};

export default SuccessUI;
