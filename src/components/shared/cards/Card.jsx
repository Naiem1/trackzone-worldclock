import PrimaryButton from './../../UI/buttons/PrimaryButton';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { format } from 'date-fns';
import EventImg from '../imgs/EventImg';

const CardWrapper = styled.div`
  border: 1px solid red;
  border-bottom: none;
  width: 300px;
  margin: 2px;
  flex-grow: 1;
  flex-basis: 200px;
  transition: transform 0.1s ease;
  user-select: none;

  &:hover {
    transform: scale(1.01);
  }
`;

const Card = ({ clicked, Timezone, Offset, Country, ISO }) => {
  const [clock, setClock] = useState(getCurrentTime());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setClock(getCurrentTime());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  function getCurrentTime() {
    const date = new Date();
    const time = date.setMinutes(
      date.getMinutes() + date.getTimezoneOffset() + parseInt(Offset)
    );
    return time;
  }

  const img = `https://countryflagsapi.com/png/${ISO}`;
  console.log(img);

  return (
    <CardWrapper>
      <div
        style={{
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <div style={{ background: '#dffd', padding: '2px 0' }}>
          <img
            style={{ width: '50px', height: '30px', marginTop: '10px' }}
            src={`https://countryflagsapi.com/png/${ISO}`}
          />
          <h1
            style={{
              fontWeight: '700',
              letterSpacing: '.5px',
              marginTop: '8px',
            }}
          >
            {Country}
          </h1>

          <h4
            style={{
              color: '#333',
              margin: '8px 0',
            }}
          >
            {Timezone}
          </h4>
        </div>
        <h1
          style={{
            fontSize: '30px',
            fontWeight: '700',
            margin: '10px 0',
          }}
        >
          {format(clock, 'hh:mm:ss a')}
        </h1>
        <p
          style={{
            padding: '10px 0',
            fontSize: '15px',
          }}
        >
          {format(clock, 'PPPP')}
        </p>
      </div>
      <PrimaryButton onClick={() => clicked(Timezone)} btnStyle="remove">
        Remove
      </PrimaryButton>
    </CardWrapper>
  );
};

export default Card;
