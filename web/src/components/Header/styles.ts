import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;
    color: #f2f2f2;

    &:hover {
      opacity: 0.7;
    }
  }

  a:first-child {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #f2f2f2;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
