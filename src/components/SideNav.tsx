import React from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import {
  Link,
  useLocation
} from "react-router-dom";

const linkStyle = "border-blue border cursor-pointer px-4 rounded-full p-3 m-1";

const SideNav: React.FC = () => {
  const location = useLocation();
  return (
    <aside className="border w-[25%] h-screen bg-white flex flex-col justify-evenly items-center shadow-lg">
      <div className="text-blue">
        <Link to="/appointment">
          <span
            className={
              (location.pathname === "/appointment" || location.pathname === "/")
                ? linkStyle + " bg-blue text-white"
                : linkStyle
            }
          >
            1
          </span>
        </Link>
        <Link to="/appointment/create-appointment">
          <span
            className={
              location.pathname === "/appointment/create-appointment"
                ? linkStyle + " bg-blue text-white"
                : linkStyle
            }
          >
            2
          </span>
        </Link>
        <Link to="/appointment/contact">
          <span
            className={
              location.pathname === "/appointment/contact"
                ? linkStyle + " bg-blue text-white"
                : linkStyle
            }
          >
            3
          </span>
        </Link>
      </div>
      <div className="w-3/4 flex justify-center flex-col items-center">
        <h2 className="font-extrabold text-6xl text-blue">
          <BsFillCalendar2CheckFill />
        </h2>
        <h3 className="font-bold text-4xl my-6 text-center text-blue">
          Schedule an appointment
        </h3>
        <p className="font-medium text-lg text-center text-gray-dark">
          Follow the step to set up an appointment with us to get the best
          solution.
        </p>
      </div>
      <footer className="text-center">
        <span className="text-lg font-semibold cursor-pointer text-green">
          amritanand.jnv25@gmail.com
        </span>
        <p className="my-2 font-medium text-gray-dark">
          &copy; {new Date().getFullYear()} Amrit Anand
        </p>
      </footer>
    </aside>
  );
};

export default SideNav;
