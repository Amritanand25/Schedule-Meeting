import React, {useState} from 'react'
import Navigation from '../Navigation'
import Calendar from 'react-calendar'
import '../../styles/Calender.css';
import Suggestion from './Suggestion';
import { Link } from 'react-router-dom';
import {MdOutlineNavigateNext} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks';
import { updateAvailability } from '../../store/slices/calenderSlice';

const Appointment:React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const dispatch = useAppDispatch();
    const timeArray = useAppSelector(store => store.selectTime.selectTime);

    const changeDateHandler = (value: any) => {
        let date = new Date(value);
        let currentDate = new Date();
        setDate(date);

        let yr = date.getFullYear();
        let month = date.getMonth();
        let dat = date.getDate();
    
        if(yr < currentDate.getFullYear())
        {
            setError(true);
            setErrorMessage("Please select current or future Date");
            return;
        }

        if(yr === currentDate.getFullYear())
        {
            if(month < currentDate.getMonth())
            {
                setError(true);
                setErrorMessage("Please select current or future Date");
                return; 
            }
        }

        if(month === currentDate.getMonth())
        {
            if(dat < currentDate.getDate())
            {
                setError(true);
                setErrorMessage("Please select current or future Date");
                return;
            }
        }

        setError(false);

        let finalDate = `${dat}/${month}/${yr}`;

        let dur = 0;
        timeArray.map(item => {
            if(item.isActive)
            dur = item.time
            return item;
        })

        let getLocalDetails:any = localStorage.getItem('scheduled-info');
        if(getLocalDetails)
        {
          getLocalDetails = JSON.parse(getLocalDetails);
        }
        let appointmentData:any = {};
        if(getLocalDetails[finalDate])
        {
          appointmentData[finalDate] = getLocalDetails[finalDate]
        }
        dispatch(updateAvailability({selectedDate: finalDate, selectedDuration: dur, appointmentList: appointmentData}));
    }

  return (
    <div className='w-[75%]'>
        <Navigation />
        <div className='text-center text-2xl font-bold text-blue my-12'><h2>Choose Date & Time</h2></div>
        <div className='flex justify-center items-center'>
            <Calendar value={date} onChange={changeDateHandler} />
            {!error && <Suggestion />}
        </div>
        <div className='text-center text-red-500 mt-4'>
            {error && <p>{errorMessage}</p>}
        </div>
        <div className='flex p-4 mt-8 justify-center items-center'>
        <Link to="/appointment" className='mr-12'>
          <button className="text-white text-md font-medium bg-blue hover:bg-opacity-80 px-6 py-3 flex items-center rounded-md">
          <span className="mr-4 font-extrabold text-xl rotate-180">
              <MdOutlineNavigateNext />
            </span>
            PREV STEP
          </button>
        </Link>
        <Link to="/appointment/contact" className='ml-12'>
          <button className="text-white text-md font-medium bg-blue hover:bg-opacity-80 px-6 py-3 flex items-center rounded-md">
            NEXT STEP
            <span className="ml-4 font-extrabold text-xl">
              <MdOutlineNavigateNext />
            </span>
          </button>
        </Link>
        </div>
    </div>
  )
}

export default Appointment