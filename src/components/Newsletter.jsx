import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
align-items: center;
justify-content: center;
display: flex ;
flex-direction: column  ;
`;

const Title = styled.h1`
font-size: 4rem;
margin-bottom: 20px;
font-weight: 500;
`;


const Description = styled.p`
font-size: 1.2rem;
font-weight: 300;
margin-bottom: 20px;
`;

const InputContainer = styled.div`
width: 50%;
height: 50px;
display: flex;
justify-content: center;
border: 1px solid lightgray;
column-gap: 5px;
`;

const Input = styled.input`
border: none;
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
            <Title>
Newsletter
            </Title>
            <Description>
Get timely updates from your favourite brand
            </Description>
            <InputContainer>
                <Input placeholder="Email"  />
                    <Button>
                        <Send/> 
                    </Button>
                
            </InputContainer>
        </Container>
    )
}


export default Newsletter
