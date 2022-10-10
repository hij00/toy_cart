import styled from "styled-components";
import { mainStyle } from "../../../style/GlobalStyle";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../store/action";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Con>
        <ConBody>
          <Img src={item.url} alt={item.name}></Img>
          <Title>{item.name}</Title>
        </ConBody>
      </Con>

      <DescBox className="price">{item.price}</DescBox>
      <DescBox className="qty">
        <QtyBtn>-</QtyBtn>
        {item.qty}
        <QtyBtn>+</QtyBtn>
      </DescBox>
      <DescBox className="total">원</DescBox>
      <DescBox className="delete">
        <Desc className="delete" onClick={() => dispatch(deleteCart(item.id))}>
          삭제
        </Desc>
      </DescBox>
    </>
  );
};

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
  border-top: 1px solid ${mainStyle.subColor2};
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

const QtyBtn = styled.button`
  all: unset;
  margin: 0 10px;
`;
