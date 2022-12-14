import styled from "styled-components";
import { mainStyle } from "../../../style/GlobalStyle";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useEffect, useState } from "react";

export const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartItem =
    cart.length >= 1 ? (
      cart.map((item, index) => <CartItem key={index} item={item} />)
    ) : (
      <>
        <NoItem>장바구니가 비었습니다.</NoItem>
      </>
    );

  const [totalP, setTotalP] = useState(0);
  const [totalI, setTotalI] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalP(price);
    setTotalI(items);
  }, [cart, totalI, totalP, setTotalI, setTotalP]);

  return (
    <Wrap>
      <SubWrap>
        <MenuWrap
          style={{
            display: `${cart.length <= 0 ? "none" : "table-row"}`,
          }}
        >
          <Menu className="con">제품</Menu>
          <Menu className="price">가격</Menu>
          <Menu className="qty">수량</Menu>
          <Menu className="total">합계</Menu>
          <Menu className="delete"></Menu>
        </MenuWrap>
        {cartItem}
      </SubWrap>
      <CartBox>
        <CTitle>Order Summary</CTitle>
        <CDescBox>
          상품가격
          <CDesc>
            <span>{totalP}</span> 원
          </CDesc>
        </CDescBox>
        <CDescBox>
          배송비
          <CDesc>
            <span>2500</span> 원
          </CDesc>
        </CDescBox>
        <CTotal>
          결제금액
          <h1>
            <span>{totalP + 2500}</span> 원
          </h1>
        </CTotal>
        <CBtn>주문하기</CBtn>
      </CartBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  padding: 0 0 0 150px;
  width: 100%;
`;

const SubWrap = styled.div`
  margin-top: 120px;
  width: 70%;
  margin-right: 70px;
  text-align: center;
`;

const MenuWrap = styled.div`
  width: 100%;

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

const CartBox = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${mainStyle.subColor2};
`;

const CTitle = styled.div`
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  padding: 230px 0 20px 30px;
  background-color: ${mainStyle.subColor2};
`;

const CDescBox = styled.div`
  width: 100%;
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${mainStyle.subColor2};
  padding: 0 150px 0 30px;
  background-color: ${mainStyle.pointColor};
`;

const CDesc = styled.div`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const CTotal = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: ${mainStyle.subColor2};
  padding: 0 150px 0 30px;
  font-size: 20px;
  font-weight: 700;
  span {
    font-weight: 900;
    font-size: 24px;
  }
`;

const CBtn = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  background-color: ${mainStyle.pointColor};

  transition: 0.5s;
  padding: 20px 0;
  font-size: 22px;
  font-weight: 900;
  &:hover {
    background-color: ${mainStyle.mainColor};
    color: white;
  }
`;

const NoItem = styled.div`
  height: 50vh;
  line-height: 50vh;
  font-size: 22px;
  font-weight: 700;
`;
