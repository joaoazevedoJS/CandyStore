import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      p {
        background: #b4eda7;
        color: #398c0d;
        line-height: 145%;
        padding: 8px 16px;
        border-radius: 16px;
        margin: 0 64px;
        margin-left: 0;
        text-align: center;
      }
    }

    button {
      width: 100%;
      margin-top: 24px;
      order: 1;
      background: #0079ff;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#0079FF")};
      }
    }

    @media (max-width: 690px) {
      div {
        flex-direction: column;
        align-items: flex-end;
        width: 100%;

        p {
          width: 100%;
          margin: 0;
          font-size: 12px;
          margin-bottom: 24px;
        }
      }
    }
  }
`;

export const Total = styled.section`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
    margin-right: 16px;
  }

  strong {
    color: #444;
    font-weight: bold;
    font-size: 28px;
    margin-left: 5px;
  }
`;
