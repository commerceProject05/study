import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.G1};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 479px;
  gap: 16px;
  overflow-y: auto;
  form {
    display: flex;
    input {
      width: 100%;
      height: 90px;
      padding: 10px 32px;
      align-items: center;
      gap: 10px;
      align-self: stretch;

      border-radius: 8px;
      border: 1px solid ${theme.color.G5};
      background-color: ${theme.color.G3};

      color: ${theme.color.G5};
      font-family: Roboto;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      transition: all 0.2s ease-in-out;
      &:focus {
        outline-color: ${theme.color.primary};
      }
    }
  }
  .button_box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    & button {
      display: flex;
      height: 29.053px;

      color: ${theme.color.G8};
      font-family: Roboto;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      &.active {
        color: ${theme.color.primary};
      }
    }
  }
`;

export const TodoItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 750px;
  li {
    width: 100%;
    height: 70px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background-color: ${theme.color.G3_5};
    color: ${theme.color.G5};
  }
`;
