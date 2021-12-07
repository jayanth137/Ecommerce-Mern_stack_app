import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 2rem;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on First Order & Flat 50% offer.
    </Container>
  );
};

export default Announcement;
