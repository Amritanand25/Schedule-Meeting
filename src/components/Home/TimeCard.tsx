import React from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai';
import { CardDataModel } from '../../models/CardDataModel';
import { useAppDispatch } from '../../hooks/useStoreHooks';
import { setActiveTime } from '../../store/slices/cardSlice';

const style = 'border w-[48%] m-2 flex items-center bg-white cursor-pointer my-6 rounded-md';

const TimeCard:React.FC<CardDataModel> = ({id, icon, title, time, isActive}) => {
    const dispatch = useAppDispatch();
   const changeActiveStatus  = () => {
     dispatch(setActiveTime(id));
   }
  return (
    <div onClick={changeActiveStatus} className={isActive ? style + ' border-2 border-green' : style + ' border-2 border-gray-light'}>
       <div className='text-green text-3xl font-bold p-4'>{icon}</div>
       <div className='mx-6 text-lg w-[100%] font-bold text-green p-4'>{title}</div>
       <div className='bg-green text-white h-full p-4 w-full flex items-center' >
         <span className='text-3xl font-bold mr-6'>
          <AiOutlineClockCircle />
         </span>
         <span className='text-lg font-medium'>
            {time} Min
         </span>
       </div>
    </div>
  )
}

export default TimeCard