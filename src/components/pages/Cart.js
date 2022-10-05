import styled from "styled-components";
import { mainStyle } from "../../style/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state);

  return (
    <Wrap>
      {/* <MenuWrap>
        <Menu>선택</Menu>
        <Menu>제품사진</Menu>
        <Menu>제품명</Menu>
        <Menu>가격</Menu>
      </MenuWrap>
      <ConWrap>
        <Con>선택</Con>
        <Img>선택</Img>
        <Title>나이키 범고래</Title>
        <Price>199,000 원</Price>
      </ConWrap> */}

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {/* {cart.items.map((a, i) => (
            <tr key={i}>
              <td>{cart.items[i].id}</td>
              <td>{cart.items[i].name}</td>
              <td>{cart.items[i].count}</td>
              <button
              // onClick={() => {
              //   dispatch(addCount(cart.items[i].id));
              // }}
              >
                +
              </button>
              <button
              // onClick={() => {
              //   dispatch(minusCount(cart.items[i].id));
              // }}
              >
                -
              </button>
              <button
              // onClick={(e) => {
              //   dispatch(deleteCount(e.target.parentElement));
              // }}
              >
                삭제
              </button>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: table;
  margin-top: 90px;
  padding: ${mainStyle.padding};
  width: 100%;
`;

// const MenuWrap = styled.div`
//   width: 100%;
//   display: table-row;
//   margin-bottom: 50px;
// `;

// const Menu = styled.div`
//   display: table-cell;
//   vertical-align: middle;
// `;

// const ConWrap = styled.div`
//   display: table-row;
//   width: 100%;
// `;

// const Con = styled.div`
//   display: table-cell;
//   vertical-align: middle;
// `;

// const Img = styled.div`
//   display: table-cell;
//   vertical-align: middle;

//   width: 100px;
//   height: 100px;
//   background-color: gray;
// `;

// const Title = styled.div`
//   display: table-cell;
//   vertical-align: middle;
// `;

// const Price = styled.div`
//   display: table-cell;
//   vertical-align: middle;
// `;

const Table = styled.div``;
