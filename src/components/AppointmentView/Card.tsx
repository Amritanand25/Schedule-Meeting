import React from "react";
import { Availability } from "../../models/AvailabilityModel";
import { FormModel } from "../../models/FormModel";
import { GiDuration } from "react-icons/gi";
import { AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai";

interface Props {
  raw: Availability;
  timeDuration: number;
  userDetails: FormModel;
}

const Card: React.FC<Props> = ({ raw, timeDuration, userDetails }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-md m-4 w-[28%]">
      <h3 className="flex items-center text-xl font-bold mb-2 border-b border-b-gray-light pb-3">
        <span className="text-3xl">
          <AiOutlineUser />
        </span>
        <div className="ml-4">
          <p>{userDetails.fullName}</p>
          <p className="text-sm font-normal text-gray-dark -mt-1">
            {userDetails.email}
          </p>
        </div>
      </h3>
      <p className="font-medium text-normal">
        Contact Number:{" "}
        <span className="text-normal font-normal">{userDetails.phone}</span>
      </p>
      <p className="font-medium text-normal">
        Notes:{" "}
        <span className="text-normal font-normal">{userDetails.note}</span>
      </p>
      <div className="mt-6 flex justify-between">
        <p className="flex items-center">
          <span className="text-xl font-bold mr-2">
            <GiDuration />
          </span>
          <span>{timeDuration} Min</span>
        </p>
        <p className="flex items-center">
          <span className="text-xl font-bold mr-2">
            <AiOutlineFieldTime />
          </span>
          <span className="">{raw.time + " " + raw.timeType}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
