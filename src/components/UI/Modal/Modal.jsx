import styled from 'styled-components';
import InputGroup from '../../shared/forms/InputGroup';
import PrimaryButton from '../buttons/PrimaryButton';
import { useState } from 'react';
import { format, getTime } from 'date-fns';

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 500;
  background: #ffffff;
  width: 50%;
  height: 300px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  left: 25%;
  top: 30%;
  padding: 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: ${(props) =>props.showModal ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${(props) => (props.showModal ? '1' : '0')};
`;



const Modal = ({ closeModal, addEvent, showModal }) => {
  const [eventTime, setEventTime] = useState('');

  const handleChanged = (e) => {
  
    console.log('time-changed>>', e.target.value);
    setEventTime(e.target.value);
  }

  
  console.log('eventTime>>', eventTime);


  
  return (
    <ModalWrapper showModal>
      <input onChange={handleChanged} type="time" name="" id="" />
      <InputGroup type="time" onChange={handleChanged} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PrimaryButton onClick={closeModal} btnStyle="close">
          Close
        </PrimaryButton>
        <PrimaryButton onClick={addEvent} btnStyle="add">
          Add
        </PrimaryButton>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
