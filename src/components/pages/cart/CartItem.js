import styled from "styled-components";
import { mainStyle } from "../../../style/GlobalStyle";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../store/action";
import { adjustQty } from "../../../store/action";
import { useState } from "react";

export const CartItem = ({ item }) => {
  const [count, setCount] = useState(item.qty);
  const dispatch = useDispatch();

  const onChange = (e) => {
    // console.log(e.target.value);
    setCount(e.target.value);
    dispatch(adjustQty(item.id, e.target.value));
  };

  return (
    <ConWrap>
      <Con>
        <ConBody>
          <Img src={item.url} alt={item.name}></Img>
          <Title>{item.name}</Title>
        </ConBody>
      </Con>

      <DescBox className="price">{item.priceS}</DescBox>
      <DescBox className="qty">
        <input
          min="1"
          type="number"
          defaultValue={count}
          onChange={onChange}
        ></input>
      </DescBox>
      <DescBox className="total">원</DescBox>
      <DescBox className="delete">
        <Desc className="delete" onClick={() => dispatch(deleteCart(item.id))}>
          삭제
        </Desc>
      </DescBox>
    </ConWrap>
  );
};

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
  border-top: 1px solid ${mainStyle.subColor2};
  &.delete {
    text-align: right;
  }
  input {
    all: unset;
    margin-left: 10px;
    width: 50%;
    text-align: center;
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
