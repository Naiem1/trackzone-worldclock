import SectionBox from '../UI/SectionBox';
import eventLogo from '../../assets/image/images.png';
import myEventLogo from '../../assets/image/myevent.png';
import EventImg from '../shared/imgs/EventImg';

const Event = ({addEvent, myEvent}) => {
  
  return (
    <SectionBox>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={myEvent}>
          <EventImg src={myEventLogo} text={'My events'} />
        </div>
        <div onClick={addEvent}>
          <EventImg src={eventLogo} text={'Add event'} />
        </div>
      </div>
    </SectionBox>
  );
};

export default Event;
