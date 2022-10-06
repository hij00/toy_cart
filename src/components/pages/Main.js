import { useDispatch } from "react-redux";
import styled from "styled-components";
import { menuDb } from "../../Db";
import { mainStyle } from "../../style/GlobalStyle";
import { addCart } from "../../store/action";

export const Main = () => {
  const dispatch = useDispatch();
  return (
    <Wrap>
      <ItemWrap>
        {menuDb.map((a) => (
          <Item key={a.id}>
            <Img src={a.url} />
            <Title>{a.name}</Title>
            <Desc>{a.price} 원</Desc>
            <Btn onClick={() => dispatch(addCart(a))}>장바구니 추가 +</Btn>
          </Item>
        ))}
      </ItemWrap>
    </Wrap>
  );
};

const Wrap = styled.section`
  padding: ${mainStyle.padding};
  width: 100%;
  margin-top: 90px;
`;

const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 20%;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const Desc = styled.h6`
  margin: 10px 0;
`;

const Btn = styled.button`
  all: unset;
  width: 100%;
  font-size: 18px;
  padding: 14px 0;
  text-align: center;
  border: 1px solid #1d1d1d;
  transition: 0.5s;
  &:hover {
    background-color: #1d1d1d;
    color: white;
  }
`;
