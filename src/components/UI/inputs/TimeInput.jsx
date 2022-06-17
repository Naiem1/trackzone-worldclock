import styled from 'styled-components';

const TimeInput = styled.input`
  width: 150px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid skyblue;
  outline: none;

  &:focus {
    border: 2px solid red;
  }
`;

export default TimeInput;
