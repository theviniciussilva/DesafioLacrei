import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 24px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  .headerWrapper {
    margin: 0 auto;
    max-width: 1366px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.buttonFocus};
      }
    }
  }

  .buttonWrapper {
    display: flex;

    li {
      margin-right: 24px;
    }
    .button_mobile {
      display: none;
    }
  }

  .token {
    position: absolute;
    top: 84px;
    right: 354px;
    z-index: 1;

    width: 240px;
    height: 148px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};

    border: 1px solid ${({ theme }) => theme.colors.grayBorder};
    border-radius: 8px;
    .label {
      display: grid;
      height: 100%;

      .divider {
        height: 1px;
        padding: 10px;
        border-bottom: solid 1px ${({ theme }) => theme.colors.grayBorder};
      }

      &_container {
        border: none;
        border-left: solid 4px transparent;
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.white};

        &:focus {
          outline: 3px solid ${({ theme }) => theme.colors.buttonFocus};
        }

        font-family: ${({ theme }) => theme.roboto.family};
        font-weight: 400;

        img {
          margin-right: 12px;
          margin-left: 8px;
        }

        &:hover {
          cursor: pointer;
          border-left: solid 4px ${({ theme }) => theme.colors.greenHovered};
          background-color: ${({ theme }) => theme.colors.popoverHover};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: static;

    .headerWrapper{
      .logo_mobile{
       
      }
    }

    .buttonWrapper {
      .button_one {
        display: none;
      }
      .button_two {
        display: none;
      }
      .button_three {
        display: none;
      }
      .button_mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;

        button {
          img {
            margin: 0;
          }
        }
      }
    }

    .tokenWrapper {
      top: 5px;
      .token {
        right: 20px;
        width: 212px;
        height: 150px;
      }
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: block;
`;
