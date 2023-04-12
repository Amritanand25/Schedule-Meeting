import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import TimeCard from "./TimeCard";
import { useAppSelector } from "../../hooks/useStoreHooks";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const TimeList: React.FC = () => {
  const selectTime = useAppSelector((store) => store.selectTime.selectTime);
  const [showNextBtn, setShowNextBtn] = useState<boolean>(false);

  useEffect(() => {
    for(let i=0; i<selectTime.length;i++)
    {
      if(selectTime[i]?.isActive)
      {
        setShowNextBtn(true);
        break;
      }else{
        setShowNextBtn(false);
      }
    }
  }, [selectTime])
  
  return (
    <div className="w-[75%]">
      <Navigation />
      <p className="text-center mt-12 my-8 mx-4 text-blue font-medium text-2xl">
        Select an option:
      </p>
      <div className="p-8 flex justify-center flex-wrap">
        {selectTime.map((item) => (
          <TimeCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center my-8">
       {showNextBtn && <Link to="/appointment/create-appointment">
          <button className="text-white text-md font-medium bg-blue hover:bg-opacity-80 px-6 py-3 flex items-center rounded-md">
            NEXT STEP
            <span className="ml-4 font-extrabold text-xl">
              <MdOutlineNavigateNext />
            </span>
          </button>
        </Link>}

        {!showNextBtn && <button className="text-white text-md font-medium bg-blue bg-opacity-40 px-6 py-3 flex items-center rounded-md cursor-default">
            NEXT STEP
            <span className="ml-4 font-extrabold text-xl">
              <MdOutlineNavigateNext />
            </span>
        </button>}
      </div>
    </div>
  );
};

export default TimeList;
