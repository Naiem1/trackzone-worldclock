import styled from 'styled-components';
import Card from '../../shared/cards/Card';
import PrimaryButton from './../../UI/buttons/PrimaryButton';
const ClockWrapper = styled.div`
  display: flex;
  flex-basis: 100px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Clock = ({ clocks, clicked }) => {

  return (
    <ClockWrapper>
      {clocks.map((zone) => (
        <Card  {...zone} key={zone.Timezone} clicked={clicked} />
      ))}
    </ClockWrapper>
  );
};

export default Clock;
