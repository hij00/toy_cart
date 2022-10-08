import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../style/GlobalStyle";

export const Header = () => {
  let cart = useSelector((state) => state.cartReducer.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.qty;
    });
    setCount(cartCount);
  }, [cart, count]);
  // forEach는 배열을 호출해야함, cart(스테이트 속성) -> cartReducer(컴바인리듀서 이름) -> state
  // useSelector(state => state)

  return (
    <Wrap>
      <Logo>
        <Link to="/">LOGO</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to="/cart">
            <FontAwesomeIcon icon={faBagShopping} />
            {count}
          </Link>
        </Menu>
      </MenuWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 80px;
  width: 100%;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  /* background-color: white; */
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 900;
`;

const MenuWrap = styled.ul``;

const Menu = styled.li`
  font-size: 24px;
`;
