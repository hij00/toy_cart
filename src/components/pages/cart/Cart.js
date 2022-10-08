import styled from "styled-components";
import { mainStyle } from "../../../style/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../../store/action";

export const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <SubWrap>
        <MenuWrap>
          <Menu className="con">제품</Menu>
          <Menu className="price">가격</Menu>
          <Menu className="qty">수량</Menu>
          <Menu className="total">합계</Menu>
          <Menu className="delete"></Menu>
        </MenuWrap>
        {cart.map((item, idx) => (
          <ConWrap key={idx}>
            <Con>
              <ConBody>
                <Img src={item.url} alt={item.name}></Img>
                <Title>{item.name}</Title>
              </ConBody>
            </Con>

            <DescBox className="price">{item.price}</DescBox>
            <DescBox className="qty">{item.qty}</DescBox>
            <DescBox className="total">원</DescBox>
            <DescBox className="delete">
              <Desc
                className="delete"
                onClick={() => dispatch(deleteCart(item.id))}
              >
                삭제
              </Desc>
            </DescBox>
          </ConWrap>
        ))}
      </SubWrap>
      <CartBox>
        <CTitle>주문서</CTitle>
        <CDesc>상품가격</CDesc>
        <CDesc>배송비</CDesc>
        <CTotal>총 합계</CTotal>
        <CBtn>주문하기</CBtn>
      </CartBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  margin-top: 120px;
  padding: ${mainStyle.padding};
  width: 100%;
`;

const SubWrap = styled.div`
  width: 70%;
  margin-right: 70px;
  text-align: center;
`;

const MenuWrap = styled.div`
  width: 100%;
  display: table-row;
  margin-bottom: 50px;
  text-align: center;
`;

const Menu = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 50px 0;
  &.con {
    width: 50%;
    text-align: left;
  }
  &.price {
    width: 13.33333%;
  }
  &.qty {
    width: 13.33333%;
  }
  &.total {
    width: 13.33333%;
  }
  &.delete {
    width: 10%;
  }
`;

const ConWrap = styled.div`
  display: table-row;
  width: 100%;
`;

const Con = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 20%;
  border-top: 1px solid ${mainStyle.subColor2};
  padding: 20px 0;
`;

const ConBody = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 20%;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const DescBox = styled.div`
  display: table-cell;
  vertical-align: middle;
  /* text-align: right; */
  border-top: 1px solid ${mainStyle.subColor2};
  /* padding-right: 10px; */
  &.delete {
    text-align: right;
  }
`;

const Desc = styled.div`
  &.delete {
    all: unset;
    padding: 5px 10px;
    background-color: ${mainStyle.subColor};
    border-radius: 10px;
  }
`;

const CartBox = styled.div`
  width: 30%;
  height: 500px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 30px;
`;

const CTitle = styled.div``;

const CDesc = styled.div``;

const CTotal = styled.div``;

const CBtn = styled.button``;
