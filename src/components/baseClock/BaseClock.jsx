import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import SectionBox from './../UI/SectionBox';

const date = new Date();
const initialTime = format(date, 'hh:mm:ss a');
const initialDate = format(date, 'dd/MM/yy');
console.log(date)
const BaseClock = () => {
  // const [time, setTime] = useState(initialTime);
  // const [currentDate, setCurrentDate] = useState(initialDate);
  const [myTime, setMyTime] = useState(date);
  // console.log(myTime);
  // console.log(format(myTime, 'hh:mm:ss a'))

  useEffect(() => {
    setInterval(() => {
      // const myDate = new Date();
      // const formatTime = format(myDate, 'hh:mm:ss a');
      // const formatDate = format(myDate, 'dd/MM/yy');
      // setTime(formatTime);
      // setCurrentDate(formatDate);
      const d = format(myTime, 'hh:mm:ss a');
      const myDate = new Date();
      setMyTime(myDate);
    }, 1000);
  }, []);


  return (
    <SectionBox>
      <h1 style={{ fontSize: '30px' }}>{format(myTime, 'hh:mm:ss a')}</h1>
      <p style={{ fontSize: '14px', padding: '10px', color: '#444' }}>
      {format(myTime, 'PPPP')}
      </p>
    </SectionBox>
  );
};

export default BaseClock;
