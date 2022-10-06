import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../style/GlobalStyle";

export const Header = () => {
  const [count, setCount] = useState(0);
  let cart = useSelector((state) => state);

  useEffect(() => {
    let count = 0;
    // cart.forEach((item) => {
    //   count += item.qty;
    // });
  }, [cart, count]);
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
  border-bottom: 1px solid #1d1d1d;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 900;
`;

const MenuWrap = styled.ul``;

const Menu = styled.li`
  font-size: 24px;
`;
