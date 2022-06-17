import { format, getTime } from "date-fns";
import Clock from './Clock/Clock';
import timezone from '../../timezone.json';
import { useState } from 'react';
import TimeInput from './../UI/inputs/TimeInput';




const Clocks = ({clocks, clicked}) => {


  const myCurrentClock = () => {
    const date = new Date();
    const myTime = date.setMinutes(date.getMinutes() + date.getTimezoneOffset() )
  }
  return (
    <div>
      <Clock clocks={clocks} clicked={clicked} />
    </div>
  );
};

export default Clocks;