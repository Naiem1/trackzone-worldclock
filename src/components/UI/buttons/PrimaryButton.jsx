import styled from "styled-components";

const background = {
  close: '#dc3545',
  add: '#198754',
  remove: '#dc3545'
 
}

const padding = {
  close: '10px',
  add: '10px',
  remove: '10px',
}

const width = {
  close: '100px',
  add: '100px',
  remove: '100%',
}

const color = {
  close: '#bb2d3b',
  add: '#157347',
}

const PrimaryButton = styled.button`
  background: ${(props) => background[props.btnStyle] ?? '#0d6efd'};
  padding:${(props) => padding[props.btnStyle] ?? '20px'};  
  width: ${(props) => width[props.btnStyle] ?? '200px'};
  text-align: center;
  display: inline-block;
  color: #FFFF;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;

  &:hover {
    color: ${props => color[props.btnStyle] ?? '#0b5ed7'},
  }
`;

export default PrimaryButton;