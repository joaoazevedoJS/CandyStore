import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #444;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #0079ff;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, "#0079FF")};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, "#0079FF")};
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 800px) {
    tbody td,
    thead th {
      padding: 4px;
      font-size: 14px;
    }

    td:nth-child(2) {
      strong {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 700px) {
    img {
      height: 70px;
    }

    th:first-child,
    td:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    th:nth-child(4),
    td:nth-child(4) {
      display: none;
    }

    img {
      height: 50px;
    }

    div {
      input {
        padding: 2px;
        width: 35px;
      }
    }
  }
`;
