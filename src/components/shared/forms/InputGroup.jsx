import styled from 'styled-components';
import TimeInput from './../../UI/inputs/TimeInput';
import Label from './Label';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputGroup = ({ type, value, name, id, onChange, onFocus, onBlur }) => {
  return (
    <Wrapper>
      <Label>Set Event Time</Label>
      <TimeInput
        type={type}
        onChange={onChange}
        value={value ?? ''}
        name={name ?? ''}
      />
    </Wrapper>
  );
};

export default InputGroup;
