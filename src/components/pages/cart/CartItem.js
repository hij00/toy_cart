import styled from "styled-components";

export const CartItem = ({ item }) => {
  return (
    <ConWrap>
      <Con>
        <img src={item.url} alt={item.title}></img>
      </Con>
      <Title>{item.name}</Title>
      <Desc></Desc>
      <Price>{item.price}원</Price>
      <Qty></Qty>
      <Delete></Delete>
    </ConWrap>
  );
};

const ConWrap = styled.div`
  width: 100%;
`;
const Con = styled.div`
  width: 20%;
  height: 300px;
`;
const Title = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;
const Qty = styled.div``;
const Delete = styled.button``;
