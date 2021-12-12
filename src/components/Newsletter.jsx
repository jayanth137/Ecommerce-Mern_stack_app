import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 80vh;
  background-color: #fcf5f5;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  ${mobile({ height: "50vh" })}
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 500;
  ${mobile({ fontSize: "3rem", marginBottom: "5px" })}
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "0.9rem" })}
`;

const InputContainer = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  border: 1px solid gray;
  justify-content: center;
`;

const Input = styled.input`
  flex: 8;
  padding-left: 30px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: #008080;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite brand</Description>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
