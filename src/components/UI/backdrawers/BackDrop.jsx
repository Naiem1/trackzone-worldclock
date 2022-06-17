import styled from 'styled-components';

const BackDropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

const BackDrop = ({ showModal, closeBackDrop }) => {
  return (
    <>
      {showModal && <BackDropWrapper onClick={closeBackDrop}></BackDropWrapper>}
    </>
  );
};

export default BackDrop;
