import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 2rem;
  width: 100%;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  ${mobile({ fontSize: "0.6rem" })}
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on First Order & Flat 50% offer.
    </Container>
  );
};

export default Announcement;
