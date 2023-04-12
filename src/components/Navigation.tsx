import React from "react";
import { TbCalendarTime } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const style = "mx-4 text-lg cursor-pointer";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname.includes("appointment"))
  return (
    <header className="flex w-full bg-white justify-between items-center px-8 py-6 shadow-md">
      <Link to="/">
        <h1 className="text-4xl text-blue font-extrabold cursor-pointer">
          <TbCalendarTime />
        </h1>
      </Link>
      <ul className="flex">
        <Link to="/appointment">
          <li
            className={
              (location.pathname.includes("appointment") || location.pathname === '/')
                ? style + " text-green font-bold"
                : style + " text-blue font-medium"
            }
          >
            Schedule Appointment
          </li>
        </Link>
        <Link to="/view-list">
          <li
            className={
              location.pathname.includes("view-list")
                ? style + " text-green font-bold"
                : style + " text-blue font-medium"
            }
          >
            View Appointment
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Navigation;
