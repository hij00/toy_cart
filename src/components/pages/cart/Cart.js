import styled from "styled-components";
import { mainStyle } from "../../../style/GlobalStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  return (
    <Wrap>
      <SubWrap>
        <MenuWrap>
          <Menu className="con">제품</Menu>
          <Menu className="price">가격</Menu>
          <Menu className="qty">수량</Menu>
          <Menu className="total">합계</Menu>
        </MenuWrap>
        {cart.map((item, idx) => (
          <ConWrap key={idx}>
            <Con>
              <Img src={item.url} alt={item.name}></Img>
              <Title>{item.name}</Title>
            </Con>

            <Desc className="price">{item.price}</Desc>
            <Desc className="qty">{item.qty}</Desc>
            <Desc className="total">합계</Desc>
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
  display: table;
  width: 70%;
`;

const MenuWrap = styled.div`
  width: 100%;
  display: table-row;
  margin-bottom: 50px;
`;

const Menu = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 50px 0;
  &.con {
    width: 50%;
  }
`;

const ConWrap = styled.div`
  display: table-row;
  width: 100%;
  border-top: 1px solid #1d1d1d;
`;

const Con = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 20%;
`;

const Img = styled.img`
  width: 20%;
`;

const Title = styled.div``;

const Desc = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const CartBox = styled.div`
  width: 30%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px;
`;

const CTitle = styled.div``;

const CDesc = styled.div``;

const CTotal = styled.div``;

const CBtn = styled.button``;
