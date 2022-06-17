import styled from "styled-components";
import LogoImg from "../../UI/imgs/LogoImg";




const Wrap = styled.div`
  width: 100px;
  border: 2px solid red;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase ;
`;

const EventImg = ({src, text}) => {
  return (
    <Wrap>
      <LogoImg src={src} />
      <p style={{fontSize: '10px'}}>{ text}</p>
    </Wrap>
  );
};

export default EventImg;