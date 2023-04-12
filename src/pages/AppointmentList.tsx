import React, {useState, useEffect} from 'react'
import Navigation from '../components/Navigation'
import Card from '../components/AppointmentView/Card';

const dt = new Date();

const AppointmentList = () => {
  const [list, setList] = useState<any>([]);
  const [storage, setStorage] = useState<any>({});
  const [pickedDate, setPickedDate] = useState<string>(`${dt.getFullYear}-${dt.getMonth()}-${dt.getDate()}`);

  useEffect(() => {
    let localData = localStorage.getItem('scheduled-info');
    if(localData)
    {
      setStorage(JSON.parse(localData));
    }
  }, [pickedDate]);
 
  useEffect(() => {
    let dt:any = pickedDate.split('-').map((item) => item.trim() && +item);
    let t1 = dt[0];
    let t2 = dt[2];
    dt.shift();
    dt.pop();
    dt.unshift(t2);
    dt.push(t1);
    dt[1] = dt[1] - 1;
    dt = dt.join('/');

    let currentData:Object = storage[dt];
    let data = [];

    if(currentData)
    {
      data = Object.values(currentData)
      data = data.sort((a, b) => +a.raw.start - +b.raw.start);
    }
    setList(data);
  }, [pickedDate]);

  const changeDateHandler = (e:any) => {
    setPickedDate(e.target?.value);
  }
  
  return (
    <div className='bg-gray-light min-h-screen'>
        <Navigation />
        <div className='p-6'>
          <div className='flex mb-6'>
            <h2 className='text-xl font-bold text-blue mr-4'>Select Date: </h2>
            <input value={pickedDate} onChange={changeDateHandler} type='date' />
          </div>
          <div className='flex flex-wrap justify-evenly'>
            {
              list?.map(((item:any) => (<Card key={item.raw.id} {...item} />)))
            }
          </div>
          {
            list.length === 0 && <p className='text-xl font-bold text-gray-dark mt-12 text-center'>Data Not Found!</p>
          }
        </div>
    </div>
  )
}

export default AppointmentList