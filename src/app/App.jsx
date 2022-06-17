import BaseClock from '../components/baseClock/BaseClock';
import Event from '../components/events/Event';
import InputGroup from '../components/shared/forms/InputGroup';
import PrimaryButton from '../components/UI/buttons/PrimaryButton';
import Container from '../components/UI/Container';
import SectionBox from '../components/UI/SectionBox';
import OptionInput from './../components/UI/inputs/OptionInput';
import Timezones from '../timezone.json';
import { useState } from 'react';
import { format } from 'date-fns';
import Clocks from '../components/clocks/Clocks';
import Modal from '../components/UI/Modal/Modal';
import BackDrawer from '../components/UI/backdrawers/BackDrop';
import BackDrop from '../components/UI/backdrawers/BackDrop';

const App = () => {
  const [option, setOption] = useState('Asia/Kabul');
  const [clocks, setClocks] = useState([]);

  const date = new Date();


  function getCurrentTime() {
    let time = new Date();
    time.setMinutes(
      time.getMinutes() + time.getTimezoneOffset() + time.getTimezoneOffset()
    );
    return time;
  }

  console.log(getCurrentTime().toLocaleTimeString());
  console.log(format(getCurrentTime(), 'hh:mm:ss a'));

  const d = new Date();
  console.log(d.setMinutes(d.getMinutes()));

  const handleSelectChange = (e) => {
    console.log('e.target.value>>', e.target.value);
    setOption(e.target.value);
  };

  const handleAddTimezone = () => {
    if (clocks.findIndex((clock) => clock.Timezone === option) < 0) {
      const zone = Timezones.find((tz) => tz.Timezone === option);
      setClocks([...clocks, zone]);
    }
  };

  const removeClockHandler = (timezone) => {
    const clock = [...clocks];
    const clockIndex = clock.findIndex((clk) => clk.Timezone === timezone);
    clock.splice(clockIndex, 1);
    setClocks(clock);

    console.log(clockIndex, clock);
  };

  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addEventHandler = () => {
    setShowModal(true);
    console.log('clicked');
  };

  const myEventHandler = () => {};

  return (
    <Container>
      <BackDrop showModal={showModal} closeBackDrop={closeModalHandler} />
      {showModal && (
        <Modal closeModal={closeModalHandler} showModal={showModal}></Modal>
      )}
      <BaseClock />
      <Event addEvent={addEventHandler} myEvent={myEventHandler} />
      <SectionBox value={option} onChange={handleSelectChange}>
        <div style={{ display: 'flex' }}>
          <OptionInput>
            {Timezones.map((tz) => (
              <option value={tz.Timezone} key={tz.Timezone}>
                {tz.Country} ({tz.Timezone})
              </option>
            ))}
          </OptionInput>

          <PrimaryButton onClick={handleAddTimezone}>Add Clock</PrimaryButton>
        </div>
      </SectionBox>
      <Clocks clocks={clocks} clicked={removeClockHandler} />
    </Container>
  );
};

export default App;
