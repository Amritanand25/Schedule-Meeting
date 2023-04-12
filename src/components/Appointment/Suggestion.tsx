import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { changeStatus } from "../../store/slices/calenderSlice";
interface Props{
  error: boolean
}
const Suggestion: React.FC<Props> = ({error}) => {
  const suggestedData = useAppSelector((store) => store.calender.availability);
  const dispatch = useAppDispatch();

  console.log(suggestedData);
  const changeHandler = (e:any, id: number, time: string) => {
   dispatch(changeStatus({id, time}));
  }

  if(suggestedData && suggestedData.length < 1)
  {
    return <></>;
  }
  if(error)
  {
    return <></>
  }
  return (
    <div className="bg-white h-[22.8rem] rounded-md shadow-lg">
      <h3 className="bg-green p-6 text-white text-lg font-bold">
        Availability
      </h3>
      <ul className="max-h-72 overflow-y-auto">
        {suggestedData?.map((item) => (
          <li className="px-2 flex items-center py-1 cursor-pointer my-1 hover:bg-gray-light">
            <input
              type="radio"
              value={`${item.isSelected}`}
              className="font-extrabold"
              id={`${item.time} ${item.timeType}`}
              name="time"
              onChange={(e) => changeHandler(e, item.id, item.time)}
            />
            <label className="ml-2" htmlFor={`${item.time} ${item.timeType}`}>
              {item.time} {item.timeType}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestion;
