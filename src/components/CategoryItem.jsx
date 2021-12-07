import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 4px;
height: 70vh;
position: relative;
`;
const Image = styled.img `
height: 100%;
width: 100%;
object-fit: cover;
`;
const Title = styled.h1`
color: #FFFFFF;
margin-bottom: 20px;
font-weight: bolder;
`;
const Info = styled.div`
position: absolute;
width: 100%; 
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
cursor: pointer;
border-color: gray;
font-weight: bolder;

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} /> 
      <Info>
        <Title>{item.title}</Title>
        <Button>BUY NOW</Button>
      </Info> 
    </Container>
  );
};

export default CategoryItem;
