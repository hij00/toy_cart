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
        <CTitle>Order Summary</CTitle>
        <CDescBox>
          상품가격
          <CDesc>
            <span>2500</span> 원
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
            <span>2500</span> 원
          </h1>
        </CTotal>
        <CBtn>주문하기</CBtn>
      </CartBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;

  /* padding: ${mainStyle.padding}; */
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
    border: 1px solid ${mainStyle.subColor};
    border-radius: 10px;
    color: ${mainStyle.subColor};
    transition: 0.5s;
    &:hover {
      color: white;
      background-color: ${mainStyle.subColor};
    }
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
